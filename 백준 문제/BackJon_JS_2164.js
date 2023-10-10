let fs = require('fs');

let input = fs.readFileSync('test.txt').toString();

let testCase = Number(input);

class Queue{
    constructor() {
        this.strage = []; // 포인터에 값을 저장 시킬 장소
        this.front =0; //첫 원소를 가르키는 포인터
        this.rear =0; // 마지막 원소를 가르킬 포인터
        this.size = 0;
    }

    isEmpty(){
        if(this.front === this.rear)  {
            return true}
        else return false;

    }
    peek(){
        return this.strage[this.front]
    }
    backPeek(){
        return this.strage[this.rear-1]
    }
    Enqueue(X) {  // 큐에 값을 저장하는 메소드
        // if (this.isEmpty())
        this.strage[this.rear] = X;
        this.rear++;
        this.size++;
    }
    Dequeue(){
        if(this.isEmpty()){
            return -1
        }else{
            let a =this.peek();
            this.strage[this.front] = null;
            this.front++;
            this.size--;
            return a;
        }
    }
}
let que = new Queue();

for (let i=1; i<=testCase; i++){
    que.Enqueue(i)
}
// console.log(que.size)

while (que.size > 1){
    let b  = que.Dequeue();
    console.log("버리는 카드: ",b)
    let a = que.Dequeue("")
    console.log("버리는 카드: ",)
    que.Enqueue(a)
console.log(que.size)

}
