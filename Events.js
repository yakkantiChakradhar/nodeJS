const EventEmitter = require("node:events");
const emitter = new EventEmitter();

/* emitter.on("order-pizza",()=>{
    console.log(`order received! Baking a pizza`);
});

emitter.emit("order-pizza"); */

emitter.on("order-pizza",(size,topping)=>{
    console.log(`order received! Baking a ${size} pizza with ${topping}`);
});

emitter.on("order-pizza",(size)=>{
    if(size === "large"){
        console.log("serving complimentary drink");
    }
});

emitter.emit("order-pizza","large","mushrooms");