// The path module provides utilities for working with files and directory paths.

const path = require("node:path");

//__ dirname :- will give the exact path of the current folder.
//__ filename :- will give the exact path of the current file.

console.log(__dirname); // C:\Users\chakradhar\Desktop\institute\Node_js
console.log(__filename); // C:\Users\chakradhar\Desktop\institute\Node_js\pathmodule.js


// basename :- will give the exact folder and file name

console.log(path.basename(__dirname)); // Node_js
console.log(path.basename(__filename)); // pathmodule.js

// extname :- file extention will be displayed

console.log(path.extname(__dirname)); // it will show empty due to folder doesn't have the extension
console.log(path.extname(__filename)); // .js

// parse :- the path of the file will be excuted in object format

console.log(path.parse(__dirname));
/* 
{
    root: 'C:\\',
    dir: 'C:\\Users\\chakradhar\\Desktop\\institute',
    base: 'Node_js',
    ext: '',
    name: 'Node_js'
  }
   */

  console.log(path.parse(__filename));
  /* 
  {
  root: 'C:\\',
  dir: 'C:\\Users\\chakradhar\\Desktop\\institute\\Node_js',
  base: 'pathmodule.js',
  ext: '.js',
  name: 'pathmodule'
}
  */


// format :- object format of the path will be executed in normal format only

console.log(path.format(path.parse(__filename))); //C:\Users\chakradhar\Desktop\institute\Node_js\pathmodule.js



// isAbsolute :- the mentioned file is exactly same or not will be said in boolean format

console.log(path.isAbsolute(__dirname));
console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute("./index.js"));

// join :- it will joins the folder paths 

console.log(path.join("f1","f2","index.html")); // f1\f2\index.html
console.log(path.join("/f1","f2","index.html")); // \f1\f2\index.html
console.log(path.join("/f1","//f2","index.html")); // \f1\\f2\index.html
console.log(path.join("/f1","//f2","../index.html"));// \f1\index.html
console.log(path.join(__dirname,"data.json")); // C:\Users\chakradhar\Desktop\institute\Node_js data.json

// resolve :-

console.log(path.resolve("f1","f2","index.html")); // C:\Users\chakradhar\Desktop\institute\Node_js\f1\f2\index.html
console.log(path.resolve("/f1","f2","index.html")); // C:\f1\f2\index.html
console.log(path.resolve("/f1","//f2","index.html")); // C:\f2\index.html
console.log(path.resolve("/f1","//f2","../index.html"));// C:\index.html
console.log(path.resolve(__dirname,"data.json")); // C:\Users\chakradhar\Desktop\institute\Node_js\data.json