const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

//request iswhat coming from browser and response iswhat wesend back
const server = http.createServer((request,res) => {
    //return a status code


    //lets set up the status code and entry headers
    //return a status code
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    //if you don't put an end then the server will hang. it will wait for you
    res.end('Hello World\n');

});


server.listen(port, hostname,() => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
