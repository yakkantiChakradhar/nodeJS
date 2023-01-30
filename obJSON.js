const http = require("node:http");

const server=http.createServer((req,res)=>{
const superHero = {firstName:"Bruce",lastName:"wayne"};

    res.writeHead(200,{"Content-Type":"application/json"});
    
    res.end(JSON.stringify(superHero));
});

server.listen(3500,()=>{console.log("server running on port 3500")});