
class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class linkedList{
    constructor() {
        this.head = null;
        this.size = 0;   //연결 리스트에 저장된 요소의 수 확인
    }

    //가장 앞에 노드를 추가 할때
    addFirst(data){
        let newNode = new Node(data) // Node를 생성

        if (this.head == null){  // 1. linked-list에 데이터가 없을 경우
            this.head = newNode;   //  linked-list의 head를 생성한 노드와 연결

        }else {                  // 2. linked-list에 데이터가 있을 경우
            newNode.next = this.head; // 생성한 노드의 포인터를 헤더가 가리킨 노드와 연결
            this.head = newNode;      //linked-list의 헤더는 새로 생성한 노드에 연결
            this.size++;
        }
    }

    //가장 마지막 노드에 추가 할 때
    addLast(data){
        let newNode = new Node(data) // Node를 생성
        let current;                // head가 가리키고 있는 노드 반환
        if (this.head == null) {    // 1. linked-list에 데이터가 없을 경우
            this.head = newNode;    // linked-list의 head를 생성한 노드와 연결
        }else {                     // 2. linked-list에 데이터가 있을 경우
            current = this.head;
            while (current.next){     // head.next가 가리키는 곳이 null값이 아닐 때까지.
                current = current.next;
            }

            current.next = newNode;   // 연결 리스트의 포인터가 null 값을 가리킬 때
        }
        this.size++;
    }
}