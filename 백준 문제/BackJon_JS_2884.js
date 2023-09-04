let fs = require("fs");

let input = fs.readFileSync('test.txt').toString().split(' ');

let hour = parseInt(input[0])
let min = parseInt(input[1])


if(min < 45){
    min = 60 - (45-min)
    if(hour == 0){
        hour = 23
    }else hour -= 1;
}else
    min -= 45;
console.log(hour,min)
