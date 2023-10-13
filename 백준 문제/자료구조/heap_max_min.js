/*
    완전 이진 트리의 일종으로, 우선순위 큐를 위하여 만들어진 자료구조이다.
    여러개의 값들 중에서 최댓값이나 최솟값을 빠르게 찾아내도록 만들어진 자료구조이다.
    우선순위가 가장 높은 데이터가 제일 앞(루트)에 위치한다.
    부모는 자식보다 우선순위가 더 높은 데이터가 배치된다.
    힙은 일종의 반정렬 상태(느슨한 정렬 상태) 를 유지한다.
    힙 트리에서는 중복된 값을 허용한다. (이진 탐색 트리에서는 중복된 값을 허용하지 않는다.)

    - 왼쪽 자식의 인덱스 = (부모의 인덱스) * 2
    - 오른쪽 자식의 인덱스 = (부모의 인덱스) * 2 + 1
    - 부모의 인덱스 = (자식의 인덱스) / 2
 */

class MinHeap{
    constructor() {
        this.heap = [];
    }
    insert(item){
        this.heap.push(item);

        let curIdx = this.heap.length - 1 ; // 첫번째 인덱스에는 임의상 데이터를 넣어 둬서 이미 길이가 1임
        let parIdx =  Math.floor((curIdx-1) / 2 ); // 정수

        //최소힙이므로 부모노드가 더 작아야함  while문 기준 부모노드가 현재노드 보다 클때까지만 검사
        while (curIdx > 0 &&  this.heap[parIdx] > this.heap[curIdx]){
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

        while (this.heap[leftIdx] && this.heap[leftIdx] <  this.heap[curIdx] //왼쪽노드가 존재하면서 부모 노드가 작을 때까지 검사 반복
                || this.heap[rightIdx] && this.heap[rightIdx] <  this.heap[curIdx]  //또는 오른쪽 노드가 존재하면서 부모 노드가 작을 더 작을 때가지 검사 반복
            )
        {
            let smallIdx = this.heap[leftIdx] < this.heap[rightIdx] ? leftIdx : rightIdx; // 왼쪽 오른쪽 인덱스 중 인덱스에 해당하는 값이 작은 쪽 대입
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

        let rootNode =  this.heap[0];  //가장 작은 값인 루트노드 저장
        this.heap[0] = this.heap.pop(); //마지막 노드의 값

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