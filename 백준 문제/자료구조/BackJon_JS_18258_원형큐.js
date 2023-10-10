//원형큐 구현

let fs = require('fs');

let input = fs.readFileSync('../test.txt').toString().split(' ');

let testCase = Number(input[0]);
console.log(testCase)
let deletePosition = Number(input[1])
class CircleQueue {
     strage = []; // 포인터에 값을 저장 시킬 장소
     maxQue = testCase;
     front = 0; //첫 원소를 가르키는 포인터
     rear = 0; // 마지막 원소를 가르킬 포인터
     size = 0;

    constructor() {
        this.maxQue = testCase;
        this.strage = Array(this.maxQue).fill(null)
    }

    isEmpty() {
        if (this.front === (this.rear+1)%this.maxQue) {
            return true
        } else return false;

    }

    isFull(){
        if ((this.rear+1)%this.maxQue === this.front){
            return true;
        }else return false;
    }

    peek() {
        return this.strage[(this.front+1)%this.maxQue]
    }


    Enqueue(X) {  // 큐에 값을 저장하는 메소드
        if (!this.isEmpty()) {
            this.rear = (this.rear+1)%this.maxQue;
            this.strage[this.rear] = X;
            this.size++;
            return this.strage[this.rear];
        }
    }

    Dequeue() {
        if (!this.isEmpty()) {
            this.strage[this.front] = null;
            this.front = (this.front+1)%this.maxQue;
            this.size--;
            return  this.strage[this.front];
        }
    }
}
let que = new CircleQueue(testCase);
