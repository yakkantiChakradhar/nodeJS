function greet(name){
    console.log(`Hello ${name}`);
}

function greetVishwas(greetFn){
    const name = "Gana";
    greetFn(name);
}

greetVishwas(greet);