//버블정렬(bubble sort)
/*
*  인접한 두 원소를 비교하여 정렬시키는 알고리즘
*
* 동작 방식
* 1. 처음 -두번째, 두번째 - 세번째 .... 마지막전 -마지막번째 인덱스 순으로 비교
* 2. 가장 큰 값은 맨 뒤로
* 3. 다음 정렬 단계에서 마지막 인덱스는 제외 후 정렬 진행
* */

function bubbleSort(arr){
    for(let i = arr.length -1; i > 0 ; i--){
        console.log(arr)
        for(let j = 0; j < i ; j++){
            if(arr[j] > arr[j+1]){  // 인접 인덱스의 값에서 앞의 값이 뒤의 값보다 크다면
                [arr[j+1], arr[j]]  = [arr[j], arr[j+1]]    //스왑
            }
        }
    }
}

let arr = Array.from({length:5}, ()=>Math.floor(Math.random()*20));

let startTime = new Date().getTime();
bubbleSort(arr);
let endTime = new Date().getTime();

console.log("소요 시간", endTime - startTime,"ms.")