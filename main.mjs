/* 1)
 import add from "./math-esm.mjs"

console.log(add(5,5));
 */

//////////////////////////////////////////////////

/* 2)

import add from "./math-esm.mjs"

console.log(add(5,5)); 

*/

//////////////////////////////////////////////////
/* 
3)

import math from "./math-esm.mjs"
//
const {add1,substract}= math;
console.log(add1(5,2));

console.log(substract(9,3)); */

///////////////////////////////////

//import * as math from './math-esm.mjs'
//
import {add,substract} from './math-esm.mjs'

//const {add,substract}= math;
console.log(add(5,2));

console.log(substract(9,3));