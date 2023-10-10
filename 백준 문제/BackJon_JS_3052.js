let fs = require('fs');

<<<<<<< HEAD
let input = fs.readFileSync('test.txt').toString().split('\n');

let arr = input.map(Number);

const mySet = new Set()

arr.forEach(value => mySet.add(value%42))
console.log(mySet.size)
console.log(mySet)
=======
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let mySet = new Set();
let arr = input.map(Number);

for(let i =0; i < 10; i++){
    mySet.add(arr[i] % 42)
}
console.log(mySet.size);
>>>>>>> 470c1281ef128c78423baeb7096cea54286e2f06
