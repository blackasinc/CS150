async function postToApi(splitsheet) {
  let result;
  await fetch('https://virtserver.swaggerhub.com/santidmar/SplitSheetAPI/2.0.0/splitsheet', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: splitsheet
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response);
    }
  })
  .then(data => {
    result = {
      splitsheetId: data.splitsheetId
    };
  })
  .catch(error => {
    console.error(error);
    result = {
      errorCode: error.status,
      errorMessage: error.statusText
    }
  })
  return result;
}

export default postToApi;
