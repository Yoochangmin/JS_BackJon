//원형큐 구현

let fs = require('fs');

let input = fs.readFileSync('../test.txt').toString().split(' ');

let testCase = Number(input[0]);
console.log(testCase)
let deletePosition = Number(input[1])
class CircleQueue{
    constructor(maxQue) {
        this.maxQue = maxQue;
        this.strage = Array(this.maxQue).fill(null)
        this.front = 0;  //첫 원소를 가르키는 포인터
        this.rear = 0; // 마지막 원소를 가르킬 포인터
        this.size = 0;  // 큐 안에 있는 요소의 크기
    }

    isEmpty() {
        if (this.front === (this.rear+1)%this.maxQue) {
            return true
        } else return false;

    }

    isFull(){
        if (this.front === this.rear) {
            return true;
        }else return false;
    }

    peek() {
        return this.strage[(this.front+1)%this.maxQue]
    }


    Enqueue(X) {  // 큐에 값을 저장하는 메소드
        if (!this.isFull()) {
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
