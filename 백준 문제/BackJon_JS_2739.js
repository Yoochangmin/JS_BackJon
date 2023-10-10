let fs = require("fs");
let input = fs.readFileSync('test.txt').toString().split('\n');

let a =Number(input[0])

for (let i= 1 ; i<=9; i++){
    console.log(`${a} * ${i} = ${a * i}`)
}