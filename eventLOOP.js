// ------ MicroTaask Queue ------

/* console.log("------------------------------This is console.log-1--------------------------------");
// process.nextTick in the microtask queue is the main callback function which is going to get more priority then anyother in eventloop
Promise.resolve().then(()=>{
    console.log("------------------------------This is console.log-2--------------------------------");
    console.log("This is promises.");});
process.nextTick(()=>{
    console.log("This is process.nextTick");
});

console.log("------------------------------This is console.log-2--------------------------------");
// Promise.resolve will be consider as second priority than the promise.nextTick

Promise.resolve().then(()=>{
    console.log("This is promises.");});

process.nextTick(()=>{
    console.log("This is process.nextTick");
});
 */


// -------- TIMEQUEUE --------

/* Promise.resolve().then(()=>{
    setTimeout(()=>{console.log("This is setTimeout");},0);
    console.log("This is promises.");});
process.nextTick(()=>{
    setTimeout(()=>{console.log("This is setTimeout");},0);
    console.log("This is process.nextTick");});
setTimeout(()=>{console.log("This is setTimeout");},10);
 */



// ............. I/O Queue ............
 

/* const fs = require("fs");
fs.readFile(__filename,()=>{console.log("This is file system of ReadFile");});
Promise.resolve().then(()=>{
    setTimeout(()=>{console.log("This is setTimeout");},0);
    console.log("This is promises.");});
process.nextTick(()=>{
    setTimeout(()=>{console.log("This is setTimeout");},0);
    console.log("This is process.nextTick");});
setTimeout(()=>{console.log("This is setTimeout");},0); */

//........I/O polling..........
/* const fs = require("fs");
fs.readFile(__filename,()=>{console.log("This is file system of ReadFile");});

process.nextTick(()=>{
    setTimeout(()=>{console.log("This is setTimeout");},0);
    console.log("This is process.nextTick");});
   
    fs.readFile(__filename,()=>{console.log("This is file system of ReadFile");
    setImmediate(()=>{console.log("This is set Immediate callback function");});});
setImmediate(()=>{console.log("This is set Immediate callback function");});


Promise.resolve().then(()=>{
    setTimeout(()=>{console.log("This is setTimeout");},0);
    console.log("This is promises.");}); */
//..................CHECK QUEUE................

    /* 
    check queue callbacks are executed after microtask queues callback, Timer queue callbacks and I/O callback filesystem are executed.
    when adding setImmediate callback in the I/O filesystem
    
    microTask queue callbacks are executed after I/O callbacks and before check queue callbacks. when microtask queues are closed in the i/o filesystem

    
    */


   /*  setImmediate(()=>{console.log("This is setImmediate function - 1");});
    setImmediate(()=>{
        Promise.resolve().then(()=>{
            setTimeout(()=>{console.log("This is setTimeout");},0);
            console.log("This is promises.");});

        console.log("This is setImmediate function - 2");
        process.nextTick(()=>{console.log("This is process.nextTick");});
                      });
    setImmediate(()=>{console.log("This is setImmediate function - 3");}); */


// microtask Queues are executed in between the check queue callbacks.

/* setTimeout(()=>{console.log("This is setTimeout");},2);

setImmediate(()=>{console.log("This is setImmediate function - 3");}); */

// when running setTimeout with delay 0 ms, and setImmediate method, the order of execution can never be guaranteed.



//........ close queue .........

const fs = require("fs");
const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close",()=>{console.log("this is from readablestream close event callback");});
setImmediate(()=>{console.log("This is setImmediate");});
setTimeout(()=>{console.log("this is set time out")},0);
Promise.resolve().then(()=>{
    console.log("This is promises.");});

process.nextTick(()=>{
    console.log("This is process.nextTick");
});


// The Event loop is a C program that Orchestrates or co-ordinates the execution of synchronous and asynchronous code in NodeJs
