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
    console.log('rawheaders', req.rawHeaders);
});

//we use post to write stuff
//change something we use put or patch
//get we send data
//Headers are preprocessed by node
//They are all lowercase and put in an object
//Rawheaders are exactly what the browser sent. 
//They are not preprocessed by node. 
//They are just put inside an array.
//If no hostname is specified, it defaults to localhost
//requests in node are handles as streams and you can read it or pipe it anywhere you want
//to grab data out of the stream you can listen to 2 things
//the data or the end

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

