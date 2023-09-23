let fs = require('fs');

let input = fs.readFileSync('test.txt').toString().split('\n');

let arr = input.map(Number);

const mySet = new Set()

arr.forEach(value => mySet.add(value%42))
console.log(mySet.size)
console.log(mySet)