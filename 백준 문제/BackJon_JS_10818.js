let fs = require('fs');

let input = fs.readFileSync('test.txt').toString().split('\n');

let a = Number(input[0].split(" ")[0]);
let b = input[1].split(" ").map(Number);

let min =1000000;
let max =-1000000;
//최솟값
for(num of b){
    if (num < min )
        min = num;
}
//최댓값
for(num of b){
    if (num > max )
        max = num;
}
console.log(min,max)

