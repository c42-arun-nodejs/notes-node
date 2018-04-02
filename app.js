console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

var sum = notes.add(3, -13);

console.log(`The sum of 3 & -13 is ${sum}`);

notes.addNote();


// var user = os.userInfo();

// console.log(user);

// fs.appendFile('greetings.txt', `Hello ${user.username}!`);

