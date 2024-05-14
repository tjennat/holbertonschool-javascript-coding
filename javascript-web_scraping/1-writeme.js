#!/usr/bin/node
const fs = require('fs');

function writeFile (filePath, content) {
  fs.writeFile(filePath, content, 'utf-8', (err) => {
    if (err) {
    console.error(err);
    }
  });
}

const filePath = '/path/to/file.txt';
const content = 'Hello, world!';

writeFile(filePath, content);
