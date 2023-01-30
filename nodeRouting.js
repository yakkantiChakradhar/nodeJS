const http = require("node:http");

const fs = require("node:fs");

const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("Hey!!! This is Home Page");
    }else if(req.url==="/about"){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("Hey!!! This is About Page");
    }else if(req.url==="/api"){
        res.writeHead(200,{"Content-Type":"application/json"});
    res.end(JSON.stringify({
        firstName:"Annavarapu",
        lastName:"Siva",
    }));
}else{
    res.writeHead(404);
    res.end("404 page not found");
}
});

server.listen(3675,()=>{console.log("Server Running on the port 3675")});