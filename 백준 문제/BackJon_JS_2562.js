let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = input.map((x) => Number(x));

let maxIndex =0;
let max=-10000;

a.forEach((value, index) => {
        if (max < value) {
            max = value;
            maxIndex = index+1
        }
    }
);

console.log(max,maxIndex)