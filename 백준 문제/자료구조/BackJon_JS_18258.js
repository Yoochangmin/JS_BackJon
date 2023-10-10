    /* Que 구현
    1) Enqueue : 큐 맨 뒤에 어떠한 요소를 추가, 마지막으로 온 손님에게 번호표 발부  =>push

    (2) Dequeue : 큐 맨 앞쪽의 요소를 삭제, 창구에서 서비스를 받은 손님의 번호표를 대기목록에서 삭제  =>pop

    (3) Peek : front에 위치한 데이터를 읽음, 다음 서비스를 받을 손님이 누구인지 확인

    (4) front : 큐의 맨 앞의 위치(인덱스), 다음 서비스를 받을 손님의 번호 front

    (5) rear : 큐의 맨 뒤의 위치(인덱스), 마지막에 온 손님의 번호 back

    ()
     */

    let fs = require('fs');

    let input = fs.readFileSync('test.txt').toString().split('\n');

    let testCase = Number(input[0]);

    class Queue {
        constructor() {
            this.strage = []; // 포인터에 값을 저장 시킬 장소
            this.front = 0; //첫 원소를 가르키는 포인터
            this.rear = 0; // 마지막 원소를 가르킬 포인터
            this.size = 0;
        }

        isEmpty() {
            if (this.front === this.rear) {
                return true
            } else return false;

        }

        peek() {
            return this.strage[this.front]
        }

        backPeek() {
            return this.strage[this.rear - 1]
        }

        Enqueue(X) {  // 큐에 값을 저장하는 메소드
            // if (this.isEmpty())
            this.strage[this.rear] = X;
            this.rear++;
            this.size++;
        }

        Dequeue() {
            if (this.isEmpty()) {
                return -1
            } else {
                let a = this.peek();
                this.strage[this.front] = null;
                this.front++;
                this.size--;
                return a;
            }
        }
    }
    let que = new Queue();
    let queStack = [];
    for (let i =1; i <= testCase; i++) {

        const command = input[i].trim().split(" ")[0];
        let num = Number(input[i].split(" ")[1]);
        if(command ==="push"){
            que.Enqueue(num);
        }else if(command ==="pop"){
            queStack.push(que.Dequeue());
        }else if(command ==="size"){
            queStack.push(que.size)
        }else if(command ==="empty"){
            if (que.isEmpty())
                queStack.push(1)
            else queStack.push(0)
        }else if(command ==="front"){
            if (que.isEmpty())
                queStack.push(-1)
            else
                queStack.push(que.peek())
        }else if(command ==="back"){
            if(que.isEmpty())
                queStack.push(-1)
            else queStack.push(que.backPeek())
        }
    }
    console.log(queStack.join("\n"))
