const request = require('request');
let breed = process.argv.slice(2);
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {

  if (error) {
    console.log('error: ', error);
    return error;
  }

  const data = JSON.parse(body)[0];

  if (data === undefined) {
    console.log('Breed not found!');
    return;
  }

  console.log(data.description);

});



