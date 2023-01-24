//1) local module// require("./add.js");

//////////////////////////////////////////////////////////


//2) module export
/* const add = require("./add.js");  // importing region, as we can import the module with any varible name which we can make access


const sum = add(1,2);
console.log(sum);
// we can use as many times as we require the function to be executed  in the same file or module.
const sum2 = add(10,12);
console.log(sum2);
 */

////////////////////////////////////////////////////////////////////

// Hello world program for the beginning 
console.log("Hello from Index.js");
//////////////////////////////////////////////////////////////////

// sum of two numbers 

///////////////////////////////////////////
/* const add = (a,b) => {return a+b;};
const sum = add(5,6);
console.log(sum); */
////////////////////////////////////

// To add other module to our module we use CommonJs which is adopted by nodeJs.

// as we use the REQUIRE method to transfer one module to another module.



/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//3) Module scope

/* require("./batman"); 
require("./superman"); */

////////require("./iife");

//////////////////////////////////////////////////
//////////////////////////////////////////////////
/// Module . Caching

/* const superHero= require("./module_caching");
console.log(superHero.getName());

superHero.setName("villas");
console.log(superHero.getName());

const newsuperHero = require("./module_caching");
console.log(newsuperHero.getName()); */

// to overcome modulecaching we use instance of superhero we need to export class rather than the instance.
/* const SuperHero =  require("./module_caching");
const batman = new SuperHero('Batman');
console.log(batman.getName());

batman.setName("brayan lee");
console.log(batman.getName());

const superMan = new SuperHero("superman");
console.log(superMan.getName());
 */

///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Import,Export Patterns

// 1) import pattern

/* const add = require("./importExportPatterns");
console.log(add(2,5)); */

// 2) 
/* const add = require("./importExportPatterns");
console.log(add(2,5));
 */

// 3)
 //const math = require('./importExportPatterns')

 /* console.log(math.add(2,3));

 console.log(math.substract(5,9));
 */

 /* const {add, substract} = math;
 console.log(add(2,3));
 console.log(substract(5,6));
 */


 // 4)

 /* const math = require('./importExportPatterns');

 const {add, substract} = math;
 console.log(add(2,3));
 console.log(substract(5,6));
 */
 // 5)

 const math = require('./importExportPatterns');

 const {add, substract} = math;
 console.log(add(2,3));
 console.log(substract(5,6));









