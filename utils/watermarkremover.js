const { PDFDocument, rgb, StandardFonts } = require('@pdf-lib/core');
const fs = require('fs');

// Function to remove watermark
async function removeWatermark(inputPdfBytes, outputPdfPath, watermarkText) {
    const pdfDoc = await PDFDocument.load(inputPdfBytes);

    // Iterate through each page and remove the watermark text
    pdfDoc.getPages().forEach(page => {
        const content = page.getTextContent();
        if (content.some(line => line.str.includes(watermarkText))) {
            const watermarkTextIndex = content.findIndex(line => line.str.includes(watermarkText));
            page.setTextContent(content.filter((_, index) => index !== watermarkTextIndex));
        }
    });

    // Save the modified PDF to a new file
    const modifiedPdfBytes = await pdfDoc.save();
    fs.writeFileSync(outputPdfPath, modifiedPdfBytes);
}

// Function to add watermark
async function addWatermark(inputPdfBytes, outputPdfPath, watermarkText) {
    const pdfDoc = await PDFDocument.load(inputPdfBytes);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // Iterate through each page and add the watermark text
    pdfDoc.getPages().forEach(page => {
        const { width, height } = page.getSize();
        const textSize = 30; // Adjust the text size as needed
        const textWidth = font.widthOfTextAtSize(watermarkText, textSize);
        const textHeight = font.heightAtSize(textSize);
        const textX = (width - textWidth) / 2;
        const textY = (height - textHeight) / 2;

        page.drawText(watermarkText, {
            x: textX,
            y: textY,
            size: textSize,
            font: font,
            color: rgb(0.5, 0.5, 0.5), // Adjust the color as needed
        });
    });

    // Save the modified PDF to a new file
    const modifiedPdfBytes = await pdfDoc.save();
    fs.writeFileSync(outputPdfPath, modifiedPdfBytes);
}

// Usage
const inputPdfPath = 'input.pdf';
const outputPdfPath = 'output.pdf';
const watermarkTextToRemove = 'Watermark Text to Remove';
const watermarkTextToAdd = 'Your Watermark Text';

const inputPdfBytes = fs.readFileSync(inputPdfPath);

// Remove watermark
removeWatermark(inputPdfBytes, outputPdfPath, watermarkTextToRemove)
    .then(() => console.log('Watermark removed successfully'))
    .catch(error => console.error('Error removing watermark:', error));

// Add watermark
addWatermark(inputPdfBytes, outputPdfPath, watermarkTextToAdd)
    .then(() => console.log('Watermark added successfully'))
    .catch(error => console.error('Error adding watermark:', error));
