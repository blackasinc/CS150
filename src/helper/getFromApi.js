async function getFromApi(splitsheetId) {
  const result = {
    status: {}
  };
  await fetch(`https://brendon.tech/api/splitsheet/${splitsheetId}`)
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
      result.splitsheet = body;
    })
    .catch(error => {
      console.error(error);
      result.status.errorMessage = error.message ?? error.statusText
    });
  return result;
}

export default getFromApi;
