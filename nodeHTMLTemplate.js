const http = require("node:http");
const fs = require("node:fs");
const server = http.createServer((req,res)=>{

    const name = "Shiva Annavarapu h/o Lakshmi"
    
    res.writeHead(200,{"Content-Type":"text/html"});

   
    // by using normal folder structure

    let html = fs.readFileSync("./nodeHTML.html","utf-8");
    html = html.replace('{{name}}',name);
    res.end(html);
});

server.listen(3600,()=>{console.log("server is running on the port 3600");});