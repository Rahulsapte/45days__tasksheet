// Day2/nodejs_custom_modules.js

const math = require('./math_module');

console.log('Using Custom Modules in Node.js');
console.log('Add(10, 4):', math.add(10, 4));        // 14
console.log('Subtract(10, 4):', math.subtract(10, 4)); // 6
