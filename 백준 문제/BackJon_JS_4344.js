let fs = require('fs');

let input = fs.readFileSync('test.txt').toString().split('\n');


for(let i=1 ; i<input.length; i++){
    let a = input[i].split(" ").map(Number);
    let check= 0;
    a.shift();

    // for (let i =0; i<a.length; i++){
    //     sum+= a[i];
    // }
    // js 방법
    const sum = a.reduce((acc, cur) => {
        return (acc + cur);
    })
    const aver = (sum/a.length)

    // a.forEach( value => {if (value > aver){ check+=1}})

    for(let i=0; i< a.length; i++){
        if(a[i] > aver) check += 1;
    }
    console.log( (check / a.length * 100).toFixed(3))
}

