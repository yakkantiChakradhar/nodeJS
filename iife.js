// Module scope is used to wrapp with an IIFE[immediately invoked function expression] that provides private scoping of code.

// IIFE allows you yo repeat variable or function names withput any conflict.

/* (function(){
    const superHero = 'Batman';
console.log(superHero);
})();

(function(){
    const superHero = 'Superman';
console.log(superHero);
})(); */


// .....  Module Wrapper

(function(message){
    const superHero = 'Batman';
console.log(message,superHero);
})("hello");

(function(message){
    const superHero = 'Superman';
console.log(message,superHero);
})("hey");
