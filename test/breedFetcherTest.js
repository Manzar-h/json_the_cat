const {fetchBreedDescription} = require('../breedFetcher');
const {assert} = require('chai');

describe('fetchBreedDescription', ()=> {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // correct description
      assert.equal(expectedDesc, desc.trim());
      done();
    });
  });

  it('Error: invalid cat breed', (done) => {
    fetchBreedDescription('thisIsNotACatBreed.', (error, desc) => {

      assert.isNotNull(error);
      assert.equal(desc, null);
      done();
    });
  });
});

/*
*****Output****
  fetchBreedDescription
    ✔ returns a string description for a valid breed, via callback (242ms)
    ✔ Error: invalid cat breed (184ms)


  2 passing (432ms)
 */
