let fs = require('fs');
let input = fs.readFileSync('test.txt').toString().split('\n');
const testCases = Number(input[0]);


let result =[];
let sum=0;
for (let i = 1 ; i <= testCases; i++){
    let num = Number(input[i]);
    if (num !== 0) result.push(num);
    else result.pop();
}
result.length ===0 ? console.log(0) : console.log(result.reduce((a,b) => a+b))


2