let fs = require('fs');

let input = fs.readFileSync('test.txt').toString().split('\n');

let testCase = Number(input[0]);

let sum ="";
console.log(testCase)
for (let i =1; i<=testCase; i++){
    let data = input[i].split(' ');
    let a =Number(data[0])
    let b =Number(data[1])
    sum += a+b + '\n';
    console.log("-----------",data, a,b)

}
console.log(sum);
