let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


let testCases = Number(input[0])
let numbers = input[1]


function sum(strings){
    let sum =0;
    for(word of strings){
        let num = Number(word)
        sum += num;
    }
    return sum;
}

console.log(sum(numbers));