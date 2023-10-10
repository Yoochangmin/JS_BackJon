let fs = require("fs");
let input = fs.readFileSync('test.txt').toString().split('\n');

let a =Number(input[0])
let total=0;

for (let i=1; i<=a; i++){
    total += i ;
}
console.log(total)
