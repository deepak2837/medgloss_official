import nextConnect from 'next-connect';
import multer from 'multer';
import AWS from 'aws-sdk';
import { execFile } from 'child_process';
import path from 'path';
import fs from 'fs';
import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from "next";
const upload = multer({ dest: '/tmp' });

// AWS S3 Configuration
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION
});
const bucketName = process.env.BUCKET_NAME;

// MongoDB Configuration
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const documentSchema = new mongoose.Schema({
  university: String,
  year: String,
  semester: String,
  course: String,
  subject: String,
  fileUrl: String
});

const Document = mongoose.models.Document || mongoose.model('Document', documentSchema);

const apiRoute = nextConnect({
  onError(error: { message: any }, req: NextApiRequest, res: NextApiResponse) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req: NextApiRequest, res: NextApiResponse) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  }
});

apiRoute.use(upload.single('pdfFile'));

apiRoute.post(async (req, res) => {
  const { university, year, semester, course, subject } = req.body;
  const pdfFile = req.file;

  const inputPdfPath = pdfFile.path;
  const outputPdfPath = path.join('/tmp', `output_${pdfFile.filename}.pdf`);
  const watermarkText = 'www.FirstRanker.com';

  // Execute the Python script
  execFile('python', ['remove_watermarks.py', inputPdfPath, outputPdfPath, watermarkText], async (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send('Error processing PDF');
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return res.status(500).send('Error processing PDF');
    }

    console.log(stdout);

    // Upload to S3
    const fileContent = fs.readFileSync(outputPdfPath);
    const fileKey = `${university}/${course}/${year}/${semester}/${subject}/${pdfFile.originalname}`;

    const params = {
      Bucket: bucketName,
      Key: fileKey,
      Body: fileContent,
      ACL: 'public-read'
    };

    try {
      const data = await s3.upload(params).promise();
      const fileUrl = data.Location;

      // Save to MongoDB
      const document = new Document({
        university,
        year,
        semester,
        course,
        subject,
        fileUrl
      });

      await document.save();

      // Clean up temporary files
      fs.unlinkSync(inputPdfPath);
      fs.unlinkSync(outputPdfPath);

      res.status(200).send({ message: 'File uploaded and data stored successfully', fileUrl });
    } catch (uploadError) {
      console.error('Error uploading file:', uploadError);
      res.status(500).send('Error uploading file');
    }
  });
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apiRoute;
