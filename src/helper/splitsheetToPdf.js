import PDFDocument from 'pdfkit';

function splitsheetToPdf(splitsheet) {
  const doc = new PDFDocument();

  // TODO: Embed splitsheet in PDF with a human readable appearance
  doc
    .font('fonts/PalatinoBold.ttf')
    .fontSize(25)
    .text('Hello, world!', 100, 100);

  return doc;
}

export default splitsheetToPdf;
