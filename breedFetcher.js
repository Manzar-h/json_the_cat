const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, resp, body) => {
    if (error) {
      callback(`Failed to request details: ${error}`,null);
    }

    const data = JSON.parse(body);
    // console.log(data);

    const breed = data[0];
    if (breed) {
      callback(null, breed.description);
    } else {
      callback(`No breed found  ${breedName}`,null);
    }
  });

};
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log(desc);
  }
});
