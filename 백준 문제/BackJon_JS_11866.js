//원형큐 구현

let fs = require('fs');

let input = fs.readFileSync('test.txt').toString().split(' ');

let testCase = Number(input[0])+1;
let k = Number(input[1])
let que = [];
let result =[];
let idx =0;
for (let i =1; i< testCase; i++){
    que.push(i)
}

while (que.length > 0){
    idx += k-1;
    if (idx >= que.length){
        idx %= que.length
    }
    let d = que[idx]
    que.splice(idx,1)
    result.push(d)

}

console.log(`<${result.join(", ")}>`)
