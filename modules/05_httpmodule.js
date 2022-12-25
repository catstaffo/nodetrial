const http = require('http');

const server = http.createServer((req,res)=>{
    //console.log(req);
    if (req.url === '/') {
        res.end('Hello world');
    } else if (req.url === '/about') {
        res.end('I am gr8');
    } else {
        res.end('Error');
    }
});

server.listen(5000);
