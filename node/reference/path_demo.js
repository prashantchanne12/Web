const path = require('path');

// -------- Base file name --------- //

// Current file -> C:\Users\prash\Desktop\WEB\node\reference\path_demo.js
// console.log(__filename);

// Current base file -> path_demo.js
console.log(path.basename(__filename));

// -------- Directory name --------- //
// Current Directory -> C:\Users\prash\Desktop\WEB\node\reference
// console.log(__dirname);

// Current directory ->
// C:\Users\prash\Desktop\WEB\node\reference
console.log(path.dirname(__filename));

// File extention 
// .js
console.log(path.extname(__filename));

// Create path object -> returns the object
console.log(path.parse(__filename));
/*
{
  root: 'C:\\',
  dir: 'C:\\Users\\prash\\Desktop\\WEB\\node\\reference',
  base: 'path_demo.js',
  ext: '.js',
  name: 'path_demo'
}
*/
// base: 'path_demo.js',
console.log(path.parse(__filename).base);

// Concatenate paths
// C:\Users\prash\Desktop\WEB\node\reference\test\hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));
