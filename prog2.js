// Gives you information about the directory path
// path is a built-in module
const path = require('path');

var pathObject = path.parse(__filename);

console.log(pathObject);