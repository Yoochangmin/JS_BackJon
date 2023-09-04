let fs = require('fs');

let input = fs.readFileSync('test.txt').toString().split('\n');

let hour = Number(input[0].split(" ")[0]);
let min = Number(input[0].split(" ")[1]);
let time = Number(input[1].split(" ")[0]);
let total = min + time;
if(total => 60){
    upTime = parseInt(total/60);
    total %= 60;
    min = total;
    hour +=  Number(upTime);
    if(hour => 24){
        setHour = hour % 24;
        hour = Number(setHour);
    }
}else {
    min = total;
}

console.log(hour, total)