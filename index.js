const { getBreed } = require('./breedFetcher');

const cat = process.argv[2];

const search = cat.slice(0, 3).toLowerCase();

getBreed(search, (error, desc) => {
  if (error) {
    console.log("ERROR!!");

  } else {
    console.log(desc);
  }
});

