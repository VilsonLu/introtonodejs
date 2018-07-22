// how to load a module
// if loading a module, use const so that we can't override the value
const logger = require('./logger')

console.log(logger);

var sayHello = function(name){
    console.log('Hello ' + name);
    logger.log('sayHello is called');
    // if we export the log function as a object
    //logger('sayHello is called');
}

sayHello('Vilson');


