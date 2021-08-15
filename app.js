const getNotes = require('./note.js');
const chalk = require('chalk');

const msg = getNotes()
console.log(msg);

console.log(chalk.blue.inverse.bold('Success!'))
