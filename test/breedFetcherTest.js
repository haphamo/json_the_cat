// breedFetcherTest.js

const { getBreed } = require('../breedFetcher');
const { assert } = require('chai');

describe('getBreed', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    getBreed('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc);

      done();
    });
  });

  it('returns an empty object', (done) => {
    getBreed("", (err, desc) => {
      
      assert.equal(err, null);

      const expectedDesc = "Your breed does not exist!";
      // a breed that doesn't exist returns an empty object
      assert.equal(expectedDesc, desc);

      done();
    });
  });


});

//Add another test (it) here which should test the scenario where an invalid/non-existent breed is passed in.