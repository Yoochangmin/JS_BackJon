let fs = require('fs');

<<<<<<< HEAD
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
=======
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
>>>>>>> 470c1281ef128c78423baeb7096cea54286e2f06

    // a.forEach( value => {if (value > aver){ check+=1}})

    for(let i=0; i< a.length; i++){
        if(a[i] > aver) check += 1;
    }
<<<<<<< HEAD
    console.log( (check / a.length * 100).toFixed(3))
}

=======
    console.log( `${(check / a.length * 100).toFixed(3)}%`)
}
>>>>>>> 470c1281ef128c78423baeb7096cea54286e2f06
