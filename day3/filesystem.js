// day3/filesystem.js

const fs = require('fs');
const path = require('path');

// Write to a file
fs.writeFileSync('day3/sample.txt', 'Hello from FileSystem Module!\n');

// Append to the same file
fs.appendFileSync('day3/sample.txt', 'Appended some more text.\n');

// Read file content
const content = fs.readFileSync('day3/sample.txt', 'utf8');
console.log('File content:\n', content);

// Rename the file
fs.renameSync('day3/sample.txt', 'day3/new_sample.txt');
fs.unlink

console.log('File renamed successfully!');

