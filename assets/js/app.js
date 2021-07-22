
fetch('https://api.brickowl.com/v1/collection/lots',
{
  method: 'GET',
  headers: {
      'X-API-KEY': '948bbe714d0d2fa46aa5ef278825e8f7ab831ac6d510467254dd19786670d386',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://calebroenigk.github.io/',
      'Access-Control-Allow-Credentials': 'true'
  },
  mode: 'cors', // no-cors, *cors, same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // Work with JSON data here
    console.log(data);
  })
  .catch((err) => {
    // Do something for an error here
  })

  console.log("hello!");
