let fs = require('fs');

let input = fs.readFileSync('test.txt').toString().split('\n');

let [testNum,testReverse] = input[0].toString().trim().split(" ")

let arr = [];
for (let i =1; i<=testNum; i++) {
    arr.push(i);
}

for (let t = 1; t <= testReverse; t++){

    let [i,j] = input[t].toString().split(" ")
    let reverseList = arr.slice(i-1 , j).reverse()
    arr.splice(i-1,j-i+1, ...reverseList);}

    // reverseList.forEach((value) =>{
    //     arr.splice(i-1,0 ,value)
    //     }
console.log(arr.join(" "))
