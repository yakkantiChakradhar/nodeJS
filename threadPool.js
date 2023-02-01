const crypto = require("node:crypto");
const Max_calls=5;
const start = Date.now();

/* crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
console.log("hash:",Date.now()-start); */

for(let i=0; i<=Max_calls;i++){
    crypto.pbkdf2("password","salt",100000,512,"sha512",()=>{
        console.log(`hash:${i+1}`,Date.now()-start);
    });
}


