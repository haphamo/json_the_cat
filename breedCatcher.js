const request = require('request');

const cat = process.argv[2];
const search = cat.slice(0, 3).toLowerCase();


const getBreed = function(search, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${search}`, (error, response, body) => {
    //console.log('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    if (error) {
      callback(error, null)
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
      console.log("Your breed does not exist!")
      } else {
      const desc = data[0].description;
      callback(null, desc); //=> retrieves the desciption
      }
    } 
  });
};

getBreed(search, (error, desc) => {
  if (error) {
    console.log("Errorrrrr!!");
  } else {
    console.log(desc);
  }
})


//Gotta change the string into a JS object by deserializing (parsing)
//Access the first entry in the data array and print out the description for the user.
//Allow the user to specify the breed name using command-line arguments.