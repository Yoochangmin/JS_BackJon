let fs = require('fs');

let input = fs.readFileSync("test.txt").toString().split("\n");

let a = Number(input[0]);

function check(a) {
    if ( a<=90 && a <= 100) {
        console.log("A")
    } else if (a => 80 && a < 90) {
        console.log("B")
    } else if (a => 70 && a < 80) {
        console.log("C")
    } else if (a => 60 && a < 70) {
        console.log("D")
    } else console.log("F")
}
check(a)
console.log(a)