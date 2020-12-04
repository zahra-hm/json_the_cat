const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {

  // checks for error
  if (error) {
    callback(error, null);
    return;
  }

  const data = JSON.parse(body)[0];

  // checks if breed exists

  if (!data) {
    callback('Breed not found!', null);
    return;
  }

  // if there is a breed
  if (data) {
    callback(null, data.description);
  } 


  });

};

module.exports = { fetchBreedDescription };



