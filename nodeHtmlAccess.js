const http = require("node:http");
const fs = require("node:fs");
const server = http.createServer((req,res)=>{
    
    res.writeHead(200,{"Content-Type":"text/html"});

    // by using pipes in node js we use this tatic
    fs.createReadStream("./nodeHTML.html").pipe(res);

    // by using normal folder structure

    /* const html = fs.readFileSync("./nodeHTML.html","utf-8");
    res.end(html); */
});

server.listen(2500,()=>{console.log("server is running on the port 2500");});