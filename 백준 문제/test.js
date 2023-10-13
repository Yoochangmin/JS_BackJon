class MaxHeap{
    constructor(){
        this.heap = [];
    }

    insert(item){
        this.heap.push(item)

        let curIdx = this.heap.length - 1 ; // 자식 노드
        let parIdx =  Math.floor((curIdx-1) / 2 ); // 부모 노드  => 순서의 시작이 0이라서 cur-1 진행

        while ( this.heap[parIdx]  !== undefined && this.heap[parIdx] < this.heap[curIdx]) {   //현재 인덱스가 0이면 안되고 부모 노드가 자식노드보다 작을때까지 검사
            this.swap(parIdx, curIdx) //부모노드가 작으면  두 값을 스왑
            curIdx = parIdx;                                 // 자식노드의 인덱스에 부모 노드의 인덱스 값 전달
            parIdx = Math.floor((curIdx-1) / 2)
        }
    }


    delete(){
        if(this.heap.length === 1){   //데이터가 하나뿐이면 삭제 후 반환
            return this.heap.pop();
        }
        let rootNode = this.heap[0]  //가장 작은 값인 루트노드 저장
        this.heap[0] = this.heap.pop() //마지막 노드의 값

        if (this.heap[0] === undefined){
            return 0;
        }

        let curIdx = 0;
        let leftIdx =  curIdx * 2 + 1   // 왼쪽 노드의 인덱스 값  => 시작 노드가 0이라서 +1 진행
        let rightIdx = curIdx * 2 + 2  // 오른쪽 노드의 인덱스 값

        while (this.heap[leftIdx] && this.heap[leftIdx] >  this.heap[curIdx] //왼쪽노드가 존재하면서 부모 노드가 클 때까지 검사 반복
        || this.heap[rightIdx] && this.heap[rightIdx] >  this.heap[curIdx]  //또는 오른쪽 노드가 존재하면서 부모 노드가 더 클 때가지 검사 반복
            )
        {
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
//최대 힙을 사용하는 코드
const maxheap = new MaxHeap();
console.log(maxheap.heap)
console.log(maxheap.delete()); // 100
maxheap.insert(1);
console.log(maxheap.heap)
maxheap.insert(2);
console.log(maxheap.heap)
console.log(maxheap.delete()); // 10
console.log(maxheap.heap)
console.log(maxheap.delete()); // 10
console.log(maxheap.heap)
maxheap.insert(3);
console.log(maxheap.heap)
maxheap.insert(2);
console.log(maxheap.heap)
maxheap.insert(1);
console.log(maxheap.heap)
console.log(maxheap.delete()); // 8
console.log(maxheap.heap)
console.log(maxheap.delete()); // 8
console.log(maxheap.heap)
console.log(maxheap.delete()); // 8
console.log(maxheap.heap)
console.log(maxheap.delete()); // 8
console.log(maxheap.delete()); // 8

console.log(maxheap); //array(5) [100, 10, 5, 1, 8]
console.log(maxheap); // array(0))