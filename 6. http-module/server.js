const http = require('http');

// Api called -> payload me properties mil jayegi req se | req consists of params, body
// then we will send the response back to client
const server = http.createServer((req, res) => {
    console.log(req, 'req');
    res.writeHead(200, { 'content-type': 'text/plain' })
    res.end('Hello node js from HTTP module')
})


const port = 3000
// server should listen to a port to send response and receive request
server.listen(port, () => {
    console.log("Server is now listening to port ", port);
})