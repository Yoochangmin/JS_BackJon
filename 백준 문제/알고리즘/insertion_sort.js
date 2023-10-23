//삽입정렬(selection sort)
/*
*  매 단계에서 각 원소를 적절한 위치로 삽입 시키는 알고리즘
*
* 동작 방식
* 1. 맨 처음 인덱스는 정렬되 있는 과정하에 시작
* 2. 선택된 인덱스부터 최대 0번째 인덱스까지 비교
* 3. 앞의 인덱스가 전의 인덱스보다 작으면 교환 -> 큰 값이 나올때까지 반복
* */

function insertionSort(arr){
    for(let i =0; i< arr.length; i++){
        console.log(arr)
        for(let j = i; j > 0 ; j--){
            if(arr[j-1] > arr[j]){  //앞의 인덱스가 전의 인덱스보다 작으면
                [arr[j-1], arr[j]]  = [arr[j], arr[j-1]]    //스왑
            }else {                 //작다면
                break;              //탈출
            }
        }
    }
}

let arr = Array.from({length:8}, ()=>Math.floor(Math.random()*20));

let startTime = new Date().getTime();
insertionSort(arr);
let endTime = new Date().getTime();

console.log("소요 시간", endTime - startTime,"ms.")