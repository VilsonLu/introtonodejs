// How to work with files
const fs = require('fs');

// Always use the async version
// const files = fs.readdirSync('./');
// console.log(files);

fs.readdir('./', function(error, data){

    if(error) console.log('Error', err);
    else console.log('Result', data);
});