
const http = require('http');
// const hostname = '127.0.0.1';
const port = 3000;

http
//request iswhat coming from browser and response iswhat wesend back
.createServer((req, res) =>{
const {headers, methods, url} = req;
let body = [];

//requests come from the front end, a client somewhere
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

    res.writeHead(200,{'Content-Type' : 'text/html'})

    const responseBody = {headers, methods, url, body};
    const page = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    These are headers
</body>
</html>

`
    res.write(page);

    res.end();
   })

})
  .listen(port, () => {
    console.log(`Listening on port ${port}`)
})

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

