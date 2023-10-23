class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;   //연결 리스트에 저장된 요소의 수 확인
    }

    //가장 앞에 노드를 추가 할때
    addFirst(data) {
        let newNode = new Node(data) // Node를 생성

        if (this.head == null) {  // 1. linked-list에 데이터가 없을 경우
            this.head = newNode;   //  linked-list의 head를 생성한 노드와 연결

        } else {                  // 2. linked-list에 데이터가 있을 경우
            newNode.next = this.head; // 생성한 노드의 포인터를 헤더가 가리킨 노드와 연결
            this.head = newNode;      //linked-list의 헤더는 새로 생성한 노드에 연결
        }
        this.size++;
    }

    //가장 마지막 노드에 추가 할 때
    addLast(data) {
        let newNode = new Node(data) // Node를 생성
        let current;                // head가 가리키고 있는 노드 반환
        if (this.head == null) {    // 1. linked-list에 데이터가 없을 경우
            this.head = newNode;    // linked-list의 head를 생성한 노드와 연결
        } else {                     // 2. linked-list에 데이터가 있을 경우
            current = this.head;
            while (current.next) {     // head.next가 가리키는 곳이 null값이 아닐 때까지.
                current = current.next;
            }

            current.next = newNode;   // 연결 리스트의 포인터가 null 값을 가리킬 때
        }
        this.size++;
    }

    //중간에 삽입할때
    addInsert(data, index) {
        if (index > 0 && index > this.size) {
            return;
        }
        //첫번째 자리에 넣을 때
        if(index === 0 ){
            let newNode = new Node(data) // Node를 생성
            newNode.next =this.head;
            this.head = newNode;
            this.size++;
            return;
        }
        //인덱스 자리에 데이터를 삽입할 때
        let newNode = new Node(data) // Node를 생성
        let current = this.head;
        let previous;
        let count = 0;
        while (count < index){
            previous = current;
            count++;
            current = current.next;
        }

        newNode.next = current;
        previous.next = newNode;
        this.size++;
    }
    //첫번째 자리 삭제
    deleteFirst(){
        //노드가 없을 때
        if (!this.head) return;
        //노드가 연결 되 있을 때
        let result = this.head;
        this.head= this.head.next;
        this.size--;
        return result;
    }
    //마지막 자리 삭제
    deleteLast(){
        let current = this.head;
        //노드가 없을 때
        if (!this.head) return;
        //노드가 하나일때
        if (this.head.next ===null){
            let result =this.head.data
            this.head = null;
            this.size--
            return result;
        }else {//헤더가 노드에 두개이상 연결 되있을 때
            while (current.next.next){
                current = current.next
            }
            let result = current.next.data;
            current.next =null;
            this.size--
            return result;
        }
    }
    //인덱스 위치의 노드 삭제
    deleteIndex(index) {   //
        let count = 0;
        let current = this.head;
        //노드가 없을 때
        if (!this.head) return;

        //인덱스 위치가 0일때
        if(index ===0){
            this.head = this.head.next;
            this.size--;
            return ;
        }
        //인덱스의 위치의 노드 삭제
        if(index >= this.size) return null;
        else {
            let previous=Object;
            for (let i = 0; i < index; i++) {
                if (current.next) {
                    previous = current;
                    current = current.next;
                } else {
                    return null;
                }
            }
            previous.next = current.next;
            this.size--;
        }
        return current.data;
    }
}


let fs = require('fs');

let input = fs.readFileSync('test.txt').toString().split("\n");

let testCase = Number(input[1])+1;

let result = input[0].trim().replace("\r\g","")

let test = new linkedList()

for (const word of result) {
    test.addLast(word)
}


let index;
(result.length === 0) ? index = 0 : index = result.length - 1;
console.log("처음 인덱스",index)
for (let i=2; i<= testCase; i++){
    let[command, word] = input[i].trim().replace('\r\g',"").split(" ");
    console.log(command)
    if (command === "L"){
        if (index === 0){
            index = 0;
            console.log("인덱스 이동 x",index)
        }else {
            index --;
            console.log("왼쪽 이동",index)
        }

    }else if (command ==="D"){
        if (index >= test.size){
            continue;
        }else {
            index++;
        }

    }else if(command === "B"){
        if (index === 0 ){
            console.log("삭제 x",index)
            index=0;
        }else {
            // test.deleteIndex(index);
            if (index === test.size -1) {
                console.log("삭제한 데이터 인덱스 1이동", test.deleteIndex(index));
                index--;
            }else {
                console.log("삭제한 데이터", test.deleteIndex(index-1));
            }

        }
    }else if(command === "P"){
        word = word.trim().replace('\r\g', "");
        if (index === 0){
            test.addFirst(word);
            index++;
            console.log("인덱스는",index,"추가되는 데이터",word)
        }else {
            test.addInsert(word,index-1)
            console.log("추가하는 데이터",word,index)
            index++;
        }
    }

}
console.log(test.deleteFirst())
console.log(test.deleteFirst())
console.log(test.deleteFirst())

