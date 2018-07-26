
const http = require('http');
// const hostname = '127.0.0.1';
const port = 3000;

http
//request iswhat coming from browser and response iswhat wesend back
.createServer((req, res) =>{
const {headers, methods, url} = req;
let body = [];

 
req
  .on('error', err => {
    console.log(err);
})
  .on('data', chunk =>{
    body.push(chunk);
})
  .on('end', () =>{
    body = Buffer.concat(body).toString();
   
    res.on('error', err => {
        console.log(err);
    })

    res.writeHead(200,{'Content-Type' : 'application/json'})

    const responseBody = {headers, methods, url, body};
    res.write(JSON.stringify(responseBody))

    res.end();
   })

})
  .listen(port, () => {
    console.log(`Listening on port ${port}`)
})

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

