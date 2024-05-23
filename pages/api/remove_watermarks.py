import fitz  # PyMuPDF
import sys

def remove_watermarks(input_pdf, output_pdf, watermark_text):
    original_pdf = fitz.open(input_pdf)
    output_pdf_document = fitz.open()  # Create a new empty PDF document

    for page_num in range(original_pdf.page_count):
        page = original_pdf.load_page(page_num)
        
        # Check if the page contains text
        text = page.get_text("text")
        
        if not text.strip():
            # If there is no text, assume the page is an image and copy it directly
            output_pdf_document.insert_pdf(original_pdf, from_page=page_num, to_page=page_num)
        else:
            # Get the text blocks
            text_blocks = page.get_text("dict")["blocks"]
            
            # Create a new blank page in the output PDF
            new_page = output_pdf_document.new_page(width=page.rect.width, height=page.rect.height)
            
            for block in text_blocks:
                if "lines" in block:
                    for line in block["lines"]:
                        for span in line["spans"]:
                            text = span["text"]
                            if watermark_text in text:
                                # Replace the watermark text with an empty string
                                text = text.replace(watermark_text, "")
                            # Use a standard font
                            fontname = "helv"
                            # Insert the modified text into the new page
                            new_page.insert_text(
                                (span["bbox"][0], span["bbox"][1]),  # Position at bottom-left of the text
                                text,
                                fontname=fontname,
                                fontsize=span["size"],
                                color=span["color"]
                            )
    
    # Save only the new pages to the output PDF
    output_pdf_document.save(output_pdf)

if __name__ == "__main__":
    input_pdf_path = sys.argv[1]
    output_pdf_path = sys.argv[2]
    watermark_text = sys.argv[3]

    remove_watermarks(input_pdf_path, output_pdf_path, watermark_text)
    print(f"Watermarks removed and saved to '{output_pdf_path}'")
