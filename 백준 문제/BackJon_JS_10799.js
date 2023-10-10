let fs = require('fs');

let input = fs.readFileSync('test.txt').toString();



let stack = [];
let result = 0;
let before="";
for (const n of input) {
    if(n === "\("){
        stack.push("\(")
        before="\(";
    }else if(before ==="\(" && n ==="\)"){
        stack.pop()
        result += stack.length;
        before = "";
    }else if(n==="\)") {
        stack.pop();
        result += 1;
    }
}
console.log(result)