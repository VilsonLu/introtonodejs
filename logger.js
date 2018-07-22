
const EventEmitter = require('events');
const emitter = new EventEmitter();
var url = 'http://mylogger.io/log';


class Logger extends EventEmitter{
    
    log(message){
        // Send an HTTP request
        console.log(message);
        // Raise an event
        this.emit('messageLogged', {id: 1, url: 'url'});
    }
}

// if we want to use this module in other modules
// this is like setting the method/property as public
//module.exports.log = log;

// we can export the function as a single object
// we can now directly call it in the modules
//module.exports = log;

// be careful of this one exports not Exports
module.exports = Logger;