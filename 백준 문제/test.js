
let fs = require('fs');

let input = fs.readFileSync('test.txt').toString().split("\n");

let testCase = Number(input[1])+1;



for (let i=2; i<= testCase; i++){
    let[command, word] = input[i].trim().replace('\r\g',"").split(" ");
    console.log(command)}