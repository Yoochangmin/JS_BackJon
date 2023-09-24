let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCases = Number(input[0]);
for(let i=1 ; i <= testCases; i++){
    let a = input[i].split(" ").map(Number);
    let check= 0;
    a.shift();
    let sum =0;

    for (let i =0; i<a.length; i++){
        sum+= a[i];
    }
    //js 방법
    // const total = a.reduce((acc, cur) => {
    //     return (acc + cur);
    // })
    const aver = sum / a.length;

    // a.forEach( value => {if (value > aver){ check+=1}})

    for(let i=0; i< a.length; i++){
        if(a[i] > aver) check += 1;
    }
    console.log( `${(check / a.length * 100).toFixed(3)}%`)
}
