let fs = require('fs');

<<<<<<< HEAD
let input = fs.readFileSync('test.txt').toString().split('\n');
=======
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
>>>>>>> 470c1281ef128c78423baeb7096cea54286e2f06

let a = input.map((x) => Number(x));

let maxIndex =0;
let max=-10000;

<<<<<<< HEAD
//forEach 문을 사용하여 배열을 반복
=======
>>>>>>> 470c1281ef128c78423baeb7096cea54286e2f06
a.forEach((value, index) => {
        if (max < value) {
            max = value;
            maxIndex = index+1
        }
    }
);

console.log(max,maxIndex)