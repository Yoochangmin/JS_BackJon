let fs = require('fs');

let input = fs.readFileSync('test.txt').toString().split('\n');

let a =Number(input[0])
let result ="";
for (let i =1; i<=a; i++){
    for (let j =1; j<=i; j++) {
        result += "*";
    }
    result +="\n";
}
console.log(result);