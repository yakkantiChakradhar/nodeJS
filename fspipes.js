const fsstreams = require("node:fs");
const zlib = require("node:zlib");
const gzip=zlib.createGzip();

const rStream = fsstreams.createReadStream("./fstext.txt",{
    encoding: "utf-8", highWaterMark:64,
});
rStream.pipe(gzip).pipe(fsstreams.WriteStream("./fstxt3.txt.gz"))
const wStrean = fsstreams.createWriteStream("./fstxt3.txt");

rStream.pipe(wStrean);