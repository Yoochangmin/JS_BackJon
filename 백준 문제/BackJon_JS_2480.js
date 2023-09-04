// 주사위 세개

let ran1 = Math.floor(Math.random()*6 )+1;
let ran2 = Math.floor(Math.random()*6 )+1;
let ran3 = Math.floor(Math.random()*6 )+1;

let money=0;
const arr=[];

console.log(ran1, ran2, ran3)
if (ran1 === ran2 || ran1 === ran3 ||ran2 === ran3){
    money = 10000 + ran1 * 1000;
}else if(ran1 === ran2 || ran2 ===ran3 || ran1 === ran3){
    arr.push(ran1)
    arr.push(ran2)
    arr.push(ran3)
    money = 1000 + n * 100;
}else if( ran1 !== ran2 || ran2 !== ran3 || ran1 !== ran3){
    maxMoney = Math.max(ran1,ran2,ran3)
    money = maxMoney * 100;
}
console.log(arr);

console.log(money)
