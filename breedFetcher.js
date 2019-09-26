const request = require('request');

const getBreed = function(search, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${search}`, (error, response, body) => {
    //console.log('error:', error); // Print the error if one occurred
    
    if (error) { 
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      
      if (data.length < 1) {
        callback(null, "Your breed does not exist!"); //this still requires a callback!!
        //The description here is not on the API but "Your breed does not exist!"
      } else {
        const desc = data[0].description.trim();
        callback(null, desc); //=> retrieves the desciption
      }
    }
  });
};


module.exports = {
  getBreed
};

//Gotta change the string into a JS object by deserializing (parsing)
//Access the first entry in the data array and print out the description for the user.
//Allow the user to specify the breed name using command-line arguments.