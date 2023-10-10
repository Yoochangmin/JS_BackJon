//스택 구현

let fs = require('fs');

let input = fs.readFileSync('test.txt').toString().split('\n');
let testCase =input[0]

let arr = [];
let result =[];
function push(X) {
    arr.push(Number(X))
}
function pop(){
    return arr.length === 0 ? -1 : arr.pop();
}

function size(){
    return arr.length
}

function empty(){
    return arr.length === 0 ? 1 : 0;
}
function top(){
    return arr.length === 0 ? -1 : arr[arr.length - 1];
}
for (let i =1; i <= testCase; i++){

    const command = input[i].trim().split(" ")[0];
    let num = input[i].split(" ")[1];
    if(command ==="push"){
        push(num);
    }
    else if(command === "pop"){
        result.push(pop());
    }else if(command === "size"){
        result.push(size());
    }
    else if(command === "empty"){
        result.push(empty());
    }else if(command === "top"){
        result.push(top());
    }
}
console.log(result.join("\n"))


