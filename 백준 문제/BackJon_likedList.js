class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    unshit(newData) {  // 연결 리스트이 맨 앞에 노드 추가
        let newNode = new Node(newData)  // 헤더는 새로운 노드를 가리킴
        this.head = newNode;
        newNode.next = this.head.next           // 새로운 노드의 next는 기존 맨 앞에 있는 노드를 가리켜야함

    }

    push(newData) {     // 연결 리스트의 맨 뒤에 노드 추가
        let newNode = new Node(newData)

        let current;
        if (this.head == null) { // 1. 노드가 없는 상태 일 경우
            this.head = newNode;
        } else {                   //2. 기존에 노드가 있는 상태 일 경우
            current = this.head;

            while (current.next === true) {
                current = current.next
            }
            current.next = newNode;
        }
        this.size++;
    }


}

const list = new LinkedList();
list.push(3)
list.push(4)
list.push(5)


console.log(list)
