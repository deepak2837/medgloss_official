const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

// Configure AWS SDK
const s3 = new AWS.S3({
  accessKeyId: 'AKIA6ODU34BXGBJ25FP6', // Replace with your AWS access key
  secretAccessKey: 'tvbwRbOhFqpmOxJ2d9RzbE/rl241QfJ1iwhV788h', // Replace with your AWS secret key
  region: 'us-east-1' // Replace with your AWS region
});

const bucketName = 'medgloss'; // Replace with your S3 bucket name

async function uploadFile(filePath) {
  const fileContent = fs.readFileSync(filePath);
  const fileName = path.basename(filePath);
  const fileKey = `abc/alhabibi/edc/${fileName}`; // Adjust the path according to your needs

  // Check if the file already exists
 
  try {
    await s3.headObject({ Bucket: bucketName, Key: fileKey }).promise();
    console.log('Error: File already exists');
    return 'Error: File already exists';
  } catch (err) {
    if (err.code !== 'NotFound') {
      throw err;
    }
  }
  // Upload the file to S3
  const params = {
    Bucket: bucketName,
    Key: fileKey,
    Body: fileContent,
    ACL: 'public-read', // Adjust permissions as needed
  };

  try {
    await s3.upload(params).promise();
    const fileUrl = `https://${bucketName}.s3.${s3.config.region}.amazonaws.com/${fileKey}`;
    console.log(`File uploaded successfully. File URL: ${fileUrl}`);
    return fileUrl;
  } catch (uploadError) {
    console.error('Error uploading file:', uploadError);
    throw uploadError;
  }
}

// Usage example
const filePath = '/home/unknown/Downloads/5_6224007026129768886.pdf'; // Replace with the path to your file
uploadFile(filePath)
  .then((fileUrl) => console.log(`File URL: ${fileUrl}`))
  .catch((error) => console.error(`Error: ${error.message}`));
