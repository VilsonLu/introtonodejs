// Naming convention: Use camel case for class
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a lister
// EC6 convention for the function
emitter.on('messageLogged', (arg) => {
    console.log(`ID: ${arg.id} \nURL: ${arg.url}`);
});

// Raise an emitter
// object passed to event is called event argument
emitter.emit('messageLogged', {id: 1, url: 'url'});