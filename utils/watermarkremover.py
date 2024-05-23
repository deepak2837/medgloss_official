import PyPDF2

def add_watermark(input_pdf_path, output_pdf_path, watermark_text):
    with open(input_pdf_path, 'rb') as input_file:
        pdf_reader = PyPDF2.PdfReader(input_file)
        pdf_writer = PyPDF2.PdfWriter()

        for page_num in range(len(pdf_reader.pages)):
            page = pdf_reader.pages[page_num]
            page.merge_page(watermark_page(page.mediabox.width, page.mediabox.height, watermark_text))

            pdf_writer.add_page(page)

        with open(output_pdf_path, 'wb') as output_file:
            pdf_writer.write(output_file)

def watermark_page(width, height, text):
    watermark = PyPDF2.pdf.PageObject.createBlankPage(width, height)
    watermark.mergeScaledTranslatedPage(watermark_page_content(text), 0.5, 0.5)
    return watermark

def watermark_page_content(text):
    c = PyPDF2.pdf.ContentStream([
        PyPDF2.pdf.PdfTextObject(text),
    ])
    return PyPDF2.pdf.PageObject.createContentStream(c)

# Usage
input_pdf = 'frdA181123A190070_FirstRanker.com.pdf'
output_pdf = 'output.pdf'
watermark_text = 'FirstRanker'

add_watermark(input_pdf, output_pdf, watermark_text)
