//최대 힙
/*
    널리 잘 알려진 자료구조 중 최대 힙이 있다. 최대 힙을 이용하여 다음과 같은 연산을 지원하는 프로그램을 작성하시오.
    배열에 자연수 x를 넣는다.
    배열에서 가장 큰 값을 출력하고, 그 값을 배열에서 제거한다.
    프로그램은 처음에 비어있는 배열에서 시작하게 된다
*/
let fs = require('fs');

let input = fs.readFileSync('test.txt').toString().split('\n');

let testCase = Number(input[0]);

class MaxHeap{
    constructor(){
        this.heap = [];
    }

    insert(item){
        this.heap.push(item)

        let curIdx = this.heap.length - 1 ; // 자식 노드
        let parIdx =  Math.floor((curIdx-1) / 2 ); // 부모 노드  => 순서의 시작이 0이라서 cur-1 진행

        while ( this.heap[parIdx]  !== undefined && this.heap[parIdx] < this.heap[curIdx]) {   //현재 인덱스가 0이면 안되고 부모 노드가 자식노드보다 작을때까지 검사
            this.swap(parIdx, curIdx); //부모노드가 작으면  두 값을 스왑
            curIdx = parIdx;                                 // 자식노드의 인덱스에 부모 노드의 인덱스 값 전달
            parIdx = Math.floor((curIdx-1) / 2);
        }
    }


    delete(){
        if(this.heap.length === 1){   //데이터가 하나뿐이면 삭제 후 반환
            return this.heap.pop();
        }

        let rootNode = this.heap[0];  //가장 큰 값인 루트노드 저장
        this.heap[0] = this.heap.pop() //마지막 노드의 값
        let curIdx = 0;
        let leftIdx =  curIdx * 2 + 1   // 왼쪽 노드의 인덱스 값  => 시작 노드가 0이라서 +1 진행
        let rightIdx = curIdx * 2 + 2  // 오른쪽 노드의 인덱스 값

        while (this.heap[leftIdx] !== undefined && this.heap[leftIdx] >  this.heap[curIdx] //왼쪽노드가 존재하면서 부모 노드가 클 때까지 검사 반복
        || this.heap[rightIdx] !== undefined && this.heap[rightIdx] >  this.heap[curIdx]  //또는 오른쪽 노드가 존재하면서 부모 노드가 더 클 때가지 검사 반복
            )
        {
            if (this.heap[leftIdx] === undefined){
                this.heap[leftIdx] = 0
            }else if(this.heap[rightIdx]  === undefined){
                this.heap[rightIdx] = 0
            }
            let bigIdx = this.heap[leftIdx] > this.heap[rightIdx] ? leftIdx : rightIdx; // 왼쪽 오른쪽 인덱스 중 인덱스에 해당하는 값이 큰 쪽 대입
            this.swap(curIdx, bigIdx);
            curIdx = bigIdx;         //  다음 부모 노드의 값 정의
            leftIdx =  curIdx * 2 + 1   // 왼쪽 노드의 인덱스 값
            rightIdx = curIdx * 2 + 2  // 오른쪽 노드의 인덱스 값
        }
        return rootNode;

    }
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    size(){
        return this.heap.length
    }
}

let maxheap = new MaxHeap();
let result = [];
for (let i =1; i <= testCase; i++){
    let num = Number(input[i])
    if (num === 0){
        if (maxheap.heap.length === 0 ){
            result.push(0);

        }else {
            result.push(maxheap.delete());
        }
    }else {
        maxheap.insert(num)

    }
}
console.log(result.join("\n"))