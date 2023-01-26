
const fsFile = require("node:fs/promises");

fsFile.readFile("fstext.txt","utf-8").then((data)=>console.log(data)).catch((error)=>console.log(error));

async function readFile(){
    try{
        const data = await fsFile.readFile("fstext.txt","utf-8");
        console.log(data);
    }
    catch(err){
         console.log(err);
    }
}

readFile();