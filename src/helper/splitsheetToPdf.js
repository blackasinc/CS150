async function splitsheetToPdf(splitsheetId) {

  let result;

  await fetch('http://brendon.tech/api/splitsheet/' + splitsheetId)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response);
      }
    })
    .then(data => {
      result = data;
    })
    .catch(error => {
      console.error(error);
      result = {
        errorCode: error.status,
        errorMessage: error.statusText
      }
      });

  console.log(result);

  const doc = new PDFDocument();// eslint-disable-line

  doc.info['Title'] = 'Splitsheet';

// pipe the document to a blob
  const stream = doc.pipe(blobStream());// eslint-disable-line

// add your content to the document here, as usual

  doc.fontSize(25).text("Splitsheet", { align: "center"});
  doc.fontSize(20).moveDown();
  doc.text("Date: " + result.signed_date);
  doc.text("Song Title: " + result.song_title);
  doc.text("Location: " + result.location);
  // doc.fontSize(25).text("Publisher: " + result.publisher);
  doc.text("Co-writers:");

  let user_count = 1;

  result.users.forEach(function(user) {
        doc.fontSize(18)
            .text(`(${user_count}) ${user.first_name} ${user.first_name}`, { align: "left"})
            .text(`     Phone Number: ${user.phone_number}`)
            .text(`     Email: ${user.email}`)
            .text(`     Ownership %: ${user.ownership_percentage}`);

        user_count++;
      }
  );
// get a blob when you're done
  doc.end();

  const a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";

  let blob;

  stream.on("finish", function() {
    // get a blob you can do whatever you like with
    blob = stream.toBlob("application/pdf");

    // or get a blob URL for display in the browser
    const url = stream.toBlobURL("application/pdf");
    const iframe = document.querySelector("iframe");
    iframe.src = url;
  });


  return doc;
}

export default splitsheetToPdf;
