
fetch('https://api.brickowl.com/v1/collection/lots',
{
  method: 'GET',
  headers: {
      'X-API-KEY': '948bbe714d0d2fa46aa5ef278825e8f7ab831ac6d510467254dd19786670d386',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:1234',
      'Access-Control-Allow-Credentials': 'true'
  },
})
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    // Work with JSON data here
    console.log(data)
  })
  .catch((err) => {
    // Do something for an error here
  })
