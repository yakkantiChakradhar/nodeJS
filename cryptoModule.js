const https = require("node:https");
const Max_Calls = 16;
const start = Date.now();
for(let i=0;i<Max_Calls;i++)
{
    https.request("https://www.google.com/",(res)=>{
        res.on("data",()=>{});
        res.on("end",()=>{console.log(`request:${i+1}`,Date.now()-start);});
    })
    .end();
} 