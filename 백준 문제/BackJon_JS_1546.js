let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testArr = input[1].split(' ').map(Number);


const solution = function (array){
    let max = array.reduce((a,b)=>Math.max(a,b));

    let changeArray = array.map(value => value/max*100)

    let aver = (changeArray.reduce((a,b) => a+b))/changeArray.length;
    console.log(aver);
}

solution(testArr)