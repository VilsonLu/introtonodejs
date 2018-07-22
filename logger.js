var url = 'http://mylogger.io/log';

function log(message){
    // Send an HTTP request
    console.log(message);
}

// if we want to use this module in other modules
// this is like setting the method/property as public
module.exports.log = log;