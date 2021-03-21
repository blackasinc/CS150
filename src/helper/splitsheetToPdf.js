function splitsheetToPdf(splitsheet) {
  // Blobstream and PDFDocument are not NPM dependencies, they live in
  // the public directory. Hence no import statement + eslint disable
  const doc = new PDFDocument(); // eslint-disable-line
  const docBlobStream = doc.pipe(blobStream());  // eslint-disable-line

  doc.info['Title'] = 'Splitsheet';
  
  doc.fontSize(25).text('Splitsheet', { align: 'center'});
  doc.fontSize(20).moveDown();
  doc.text('Date: ' + splitsheet.signed_date);
  doc.text('Song Title: ' + splitsheet.song_title);
  doc.text('Location: ' + splitsheet.location);
  doc.text('Co-writers:');

  splitsheet.users.forEach(function(user, i) {
        doc.fontSize(18)
            .text(`(${i + 1}) ${user.first_name} ${user.last_name}`, { align: 'left'})
            .text(`     Phone Number: ${user.phone_number}`)
            .text(`     Email: ${user.email}`)
            .text(`     Ownership %: ${user.ownership_percentage}`);
      }
  );
  doc.end();

  return docBlobStream;
}

export default splitsheetToPdf;
