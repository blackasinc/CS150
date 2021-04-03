async function postToApi(splitsheet) {
  const result = {
    status: {}
  };
  await fetch('https://brendon.tech/api/splitsheet', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(splitsheet)
  })
  .then(response => {
    result.status.statusCode = response.status;
    result.status.didSucceed = response.ok;
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response);
    }
  })
  .then(body => {
    result.splitsheetId = body.splitsheetId;
  })
  .catch(error => {
    console.error(error);
    result.status.errorMessage = error.message ?? error.statusText
  });
  return result;
}

export default postToApi;
