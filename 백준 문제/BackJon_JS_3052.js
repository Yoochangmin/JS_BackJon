let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let mySet = new Set();
let arr = input.map(Number);

for(let i =0; i < 10; i++){
    mySet.add(arr[i] % 42)
}
console.log(mySet.size);
