// 주사위 세개
let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let ran1 = Number(input[0].split(" ")[0]);
let ran2 = Number(input[0].split(" ")[1]);
let ran3 = Number(input[0].split(" ")[2]);

if (ran1 === ran2 && ran2 === ran3){
    money = 10000 + ran2 * 1000;}
else if(ran1 === ran2) {
    money = 1000 + ran1 * 100;
} else if(ran2 === ran3) {
    money = 1000 + ran2 * 100;

} else if(ran1 === ran3) {
    money = 1000 + ran1 * 100;
}else {
    money= Math.max(ran1,ran2,ran3) *100;
}
console.log(money)
