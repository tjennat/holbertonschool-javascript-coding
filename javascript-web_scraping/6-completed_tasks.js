#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request.get(url, function (err, response, body) {
  if (err) {
    console.log('error:', err);
  } else {
    const obj = JSON.parse(body);
    const tasks = {};
    for (const task of obj) {
      if (task.completed === true) {
        if (tasks[task.userId] === undefined) {
          tasks[task.userId] = 1;
        } else {
          tasks[task.userId] += 1;
        }
      }
    }
    console.log(tasks);
  }
});
