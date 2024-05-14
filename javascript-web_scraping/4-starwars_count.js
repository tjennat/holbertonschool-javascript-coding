#!/usr/bin/node

const request = require('request');
const id = 18;
const url = process.argv[2];
let count = 0;

request.get(url, function (err, response, body) {
  if (err) {
    console.log('error:', err);
  } else {
    const obj = JSON.parse(body).results;
    for (const result of obj) {
      for (const character of result.characters) {
        if (character.includes(id)) {
          count += 1;
        }
      }
    }
  }
  console.log(count);
});
