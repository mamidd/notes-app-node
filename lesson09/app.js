console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

// let user = os.userInfo().username;

// console.log(user);
// fs.appendFileSync('greetings.txt', 'Hello ' + user + '!');
// fs.appendFileSync('greetings.txt', `Hello ${user}!`);
// fs.appendFileSync('greetings.txt', `Hello ${user}! You are ${notes.age}.`);

// let res = notes.addNote();
// console.log(res);

// let res = notes.add(5,3);
// console.log(res);

// console.log(_.isString(true));
// console.log(_.isString('Mario'));

let filteredArray = _.uniq(['Mario', 1, 'Mario', 'Andrea', 1, 2, 3, 4]);
console.log(filteredArray);
