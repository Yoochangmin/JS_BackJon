let fs = require('fs');

<<<<<<< HEAD
let input = fs.readFileSync('test.txt').toString().split('\n');
=======
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
>>>>>>> 470c1281ef128c78423baeb7096cea54286e2f06

let testArr = input[1].split(' ').map(Number);


const solution = function (array){
    let max = array.reduce((a,b)=>Math.max(a,b));

    let changeArray = array.map(value => value/max*100)

    let aver = (changeArray.reduce((a,b) => a+b))/changeArray.length;
    console.log(aver);
}

solution(testArr)