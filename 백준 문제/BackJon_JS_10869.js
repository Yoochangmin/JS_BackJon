let fs = require('fs');

let input = fs.readFileSync('test.txt').toString().split('\n');

let line = input[0].split(' ')

let a = Number(line[0]);
let b = Number(line[1]);

let plus = a + b;
let sub = a - b;
let mul = a * b;
let div = parseInt(a / b);
let rem = a % b;

console.log(plus);
console.log(sub);
console.log(mul);
console.log(div);
console.log(rem);








