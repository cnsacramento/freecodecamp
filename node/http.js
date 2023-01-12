const http = require('http');
const PORT = 12345;


const server = http.createServer((request, response) => {

    response.setHeader('content-type', 'text/plain; charset=utf-8');
    console.log(`host: ${request.headers.host}`)
    console.log(`headers: ${request.headers}`)
    console.log(`url: ${request.url}`);
    console.log(`method: ${request.method}`)
    console.log(`status code: ${response.statusCode}`);

    response.write(`I am before the end message (logically).\n`);
    //console.log(request);
    response.end('Hello buddy, I am your server')
}).listen(PORT, () => {
    console.log(`Listening at localhost:${PORT}`);
});