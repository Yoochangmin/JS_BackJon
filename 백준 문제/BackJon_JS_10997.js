let fs = require('fs')

let input = fs.readFileSync('test.txt').toString().split('\n');

let line = input[0].split(' ')

const a = parseInt(line[0]);

const b = parseInt(line[1]);

console.log(a*b);


