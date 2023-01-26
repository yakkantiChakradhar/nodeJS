const fsstreams = require("node:fs");
const readableStream = fsstreams.createReadStream("./fstext.txt",{
    encoding: "utf-8", highWaterMark: 64,
});
const writeableStrean = fsstreams.createWriteStream("./fstxt2.txt");

readableStream.on("data",(chunk)=>{
    console.log(chunk);
    writeableStrean.write(chunk);
});