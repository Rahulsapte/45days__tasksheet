// day3/streams.js

const fs = require('fs');
const path = require('path');

// Create a readable stream
const reader = fs.createReadStream('day3/new_sample.txt', 'utf8');

// Create a writable stream
const writer = fs.createWriteStream('day3/output.txt');

// Pipe data from reader to writer
reader.pipe(writer);

reader.on('end', () => {
  console.log('✅ Data streamed successfully to output.txt');
});
