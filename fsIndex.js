const fs = require("node:fs");

const fileaccess = fs.readFileSync("./fstext.txt","utf-8");

console.log(fileaccess);

// here we see the access of filesystem from one module to another module, by using readFileSync. this will gives the synchronous behaviour of accessing the files.

//==> now we will see the asynchronous way of accessing the files

fs.readFile("./fstext.txt","utf-8",(error,data)=>{
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }

});


//....> here will be create or write a file through coding


fs.writeFileSync("./fsgreet.txt", "hello this is shiva");

fs.writeFile("./fsgreet.txt"," ,hello shiva this is anitha",{flag: "a"},(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("File written");
    }

})