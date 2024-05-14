#!/usr/bin/node

const request = require('request');

const id = process.argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/';
const urlId = url + id;

request.get(urlId, function (err, response, body) {
  if (err) {
    console.error('error:', err);
  } else {
    const obj = JSON.parse(body);
    console.log(obj.title);
  }
});
