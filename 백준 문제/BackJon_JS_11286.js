let fs = require('fs');

let input = fs.readFileSync('test.txt').toString().split('\n');

let testCase = Number(input[0]);


class MinHeap{
    constructor() {
        this.heap = [];
    }
    insert(item){
        this.heap.push(item);

        let curIdx = this.heap.length - 1 ; // 첫번째 인덱스에는 임의상 데이터를 넣어 둬서 이미 길이가 1임
        let parIdx =  Math.floor((curIdx-1) / 2 ); // 정수

        //최소힙이므로 부모노드가 더 작아야함  while문 기준 부모노드가 현재노드 보다 클때까지만 검사
        while (curIdx > 0 &&  Math.abs(this.heap[parIdx]) > Math.abs(this.heap[curIdx])){
            this.swap(parIdx, curIdx);  //부모노드의 값이 더 크므로 자식노드와 스왑
            curIdx = parIdx;                                  //
            parIdx = Math.floor((curIdx -1) / 2)
        }
    }


    delete(){
        if(this.heap.length === 1){   //데이터가 하나뿐이면 삭제 후 반환
            return this.heap.pop();
        }

        let rootNode = this.heap[0]  //가장 작은 값인 루트노드 저장
        this.heap[0] = this.heap.pop() //마지막 노드의 값

        let curIdx = 0;
        let leftIdx =  curIdx * 2 + 1   // 왼쪽 노드의 인덱스 값  => 시작 노드가 0이라서 +1 진행
        let rightIdx = curIdx * 2 + 2  // 오른쪽 노드의 인덱스 값

        while (this.heap[leftIdx] && Math.abs(this.heap[leftIdx]) <  Math.abs(this.heap[curIdx]) //왼쪽노드가 존재하면서 부모 노드가 작을 때까지 검사 반복
        || this.heap[rightIdx] && Math.abs(this.heap[rightIdx]) <  Math.abs(this.heap[curIdx])  //또는 오른쪽 노드가 존재하면서 부모 노드가 작을 더 작을 때가지 검사 반복
            )
        {
            let smallIdx = leftIdx;
            if (this.heap[leftIdx] === undefined && this.heap[rightIdx] !== undefined){
                smallIdx =rightIdx;
            }else if (this.heap[leftIdx] !== undefined && this.heap[rightIdx] === undefined){
                smallIdx =leftIdx;
            }else {
                if (Math.abs(this.heap[leftIdx]) === Math.abs(this.heap[rightIdx])){
                    smallIdx = this.heap[leftIdx] < this.heap[rightIdx] ? leftIdx : rightIdx; // 왼쪽 오른쪽 인덱스 중 인덱스에 해당하는 값이 작은 쪽 대입
                }
            }
            this.swap(curIdx, smallIdx);
            curIdx = smallIdx;         //  다음 부모 노드의 값 정의
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

let minheap = new MinHeap();
let result = [];
for (let i =1; i <= testCase; i++){
    let num = Number(input[i])
    if (num === 0){
        if (minheap.heap.length === 0 ){
            result.push(0);
        }else {
            result.push(minheap.delete());
        }
    }else {
        minheap.insert(num)

    }
}
console.log(result.join("\n"))