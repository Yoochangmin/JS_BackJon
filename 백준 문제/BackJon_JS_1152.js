let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = input[0].trim().split(" ");

if (a == ''){
    console.log(0);
}else console.log(a.length)
