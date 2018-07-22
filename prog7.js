const http = require('http');

// http extends the event emitter
const server = http.createServer((req, res)=> {
    if(req.url === '/'){
        res.write('Hello World');
        res.end();
    }

    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

// you can find this in the documentation
// https://nodejs.org/dist/latest-v8.x/docs/api/net.html#net_class_net_server
// server.on('connection', (socket) => {
//     console.log('New connection...');
// });
server.listen(3000);

console.log('Listening on port 3000');