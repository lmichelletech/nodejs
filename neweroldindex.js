
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

//request iswhat coming from browser and response iswhat wesend back
const server = http.createServer();

server.on('request', (req, res) => {
    //return a status code
    const {method,url} = req;
    // console.log('method', method, 'url', url);
    const {headers} = req;
    // console.log('headers',headers);

    const userAgent = headers['user-agent'];
    const rawHeaders = req.rawHeaders;
    

    // console.log('request', req);
    // console.log('rawheaders', req.rawHeaders);


//the size of chunk is predefined and optimized by node
//the data event is fired everytime a chunk comes in and
//it is pushed in an array
//once end is called, we take the buffer object and concatenate 
//the body and turn it into a string
//the body will then have the entire request body stored in it
//buffer concats from base64 to string (english)
//acts as an intermediary storage
let body = [];
req.on('error', (er) => {
    console.log(err);
}).on('data', chunk =>{
    body.push(chunk);
}).on('end', () =>{
    body = Buffer.concat(body).toString();
    console.log(body);

})
res.end('hello');
}).listen(3000);

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

