// Day2/nodejs_core_modules.js

const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

// Core Module Example: HTTP Server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Welcome to Node.js Core Modules Example!\n');
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/');
});

// Using other core modules (just logging info)
console.log('Current directory:', __dirname);
console.log('File path:', __filename);
console.log('OS Platform:', os.platform());
console.log('Path example:', path.join(__dirname, 'demo'));
