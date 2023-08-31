//(세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.
//472 385

let fs = require('fs');

let input = fs.readFileSync('test.txt').toString().split('\n');

let line = parseInt(input[0]);
let line2 = input[1].split('');
let line3 = line * parseInt(line2[2]);
let line4 = line * parseInt(line2[1]) ;
let line5 = line * parseInt(line2[0]) ;
let line6 = line3 + line4 * 10 + line5 * 100;
console.log(line3)
console.log(line4)
console.log(line5)
console.log(line6)

