var x =;
var url = 'http://mylogger.io/log';

function log(message){
    // Send an HTTP request
    console.log(message);
}

// if we want to use this module in other modules
// this is like setting the method/property as public
module.exports.log = log;

// we can export the function as a single object
// we can now directly call it in the modules
//module.exports = log;