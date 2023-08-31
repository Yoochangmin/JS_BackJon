let fs = require('fs');
let input = fs.readFileSync('test.txt').toString().split('\n');

let line = input[0].split(' ');

let a = parseInt(line[0]);
let b = parseInt(line[1]);


console.log(input)
console.log(a + b);