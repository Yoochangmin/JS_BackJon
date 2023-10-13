let fs = require('fs');

let input = fs.readFileSync('test.txt').toString().trim().split('\n').map(str => str.replace(/\r/g, ''));


let word ="";
let rowLength = 0;
for (let i=0; i<input.length; i++){
    if (rowLength < input[i].length)
        rowLength = input[i].length
}

for (let i =0; i < rowLength; i++){
    for (let j=0; j < input.length; j++){
            word += input[j][i] || "";
}}
console.log(word);
