const http = require("node:http");

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Hello Chakradhar this is shiva");
});

server.listen(3000,()=>{console.log("server running on port 3000")});