// BackJon_JS_
// fs 모듈
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString.split("\n");


//readline 모듈
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', function(line){
 // 콘솔 입력 창에서 줄바꿈(Enter)를 입력할 때마다 호출
 input.push(line);
}).on('close',function (){
    //콘솔 입력 창에서 ctrl + c 혹은 ctrl + D를 입력하면 호출(입력의 종료)
    console.log(input);
    process.exit();
})
//https://splin.tistory.com/4

