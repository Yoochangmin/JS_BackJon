let fs = require('fs');

let input = fs.readFileSync('test.txt').toString().split('\n');

let a = input.map((x) => Number(x));

let maxIndex =0;
let max=-10000;

//forEach 문을 사용하여 배열을 반복
a.forEach((value, index) => {
        if (max < value) {
            max = value;
            maxIndex = index+1
        }
    }
);

console.log(max,maxIndex)