let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let [a, b] = input[0].split(" ");

let result=0;
a = a.split("").reverse();
b = b.split("").reverse();

a = Number(a.join(""));
b = Number(b.join(""));
result = Math.max(a,b)
console.log(result)
