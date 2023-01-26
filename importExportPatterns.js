<<<<<<< HEAD
//1) pattern of export

/* const add = (a,b)=>{
    return a+b;
}; */

//1)module.exports = add;

//2) 
/* module.exports = (a,b)=>{
    return a+b;
}; */


//3)

/* const add = (a,b)=>{
    return a+b;
    };
const substract = (a,b)=>{
    return a-b;
};

module.exports = {add,substract}; */

//4)

/* module.exports.add = (a,b)=>{return a+b;};
module.exports.substract = (a,b)=>{return a-b;};
 */

//5)

exports.add = (a,b)=>{return a+b;};
exports.substract = (a,b)=>{return a-b;};

=======
//1) pattern of export

/* const add = (a,b)=>{
    return a+b;
}; */

//1)module.exports = add;

//2) 
/* module.exports = (a,b)=>{
    return a+b;
}; */


//3)

/* const add = (a,b)=>{
    return a+b;
    };
const substract = (a,b)=>{
    return a-b;
};

module.exports = {add,substract}; */

//4)

/* module.exports.add = (a,b)=>{return a+b;};
module.exports.substract = (a,b)=>{return a-b;};
 */

//5)

exports.add = (a,b)=>{return a+b;};
exports.substract = (a,b)=>{return a-b;};

>>>>>>> bbe6fd0b2b8bd864dd5a1eb9d388c11f85d0d76b
