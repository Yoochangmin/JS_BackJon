//선택정렬(selection sort)
/*
*  매 단계에서 가장 작은 원소를 선택해서 앞으로 보내는 알고리즘
*
* 동작 방식
* 1. 각 단계에서 가장 작은 원소를 선택
* 2. 현재까지 처리되지 않은 원소들 중 가장 앞의 원소와 위치를 교체
* */

function selectionSort(arr){
    for(let i =0; i< arr.length; i++){
        console.log(arr)
        let minIndex = i; // 가장 작은 원소의 위치
        for(let j = i+1; j < arr.length;j++){
            if(arr[minIndex] > arr[j]){
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]]  = [arr[minIndex], arr[i]]  //최소 값을 가진 인덱스와 교환
    }
}

let arr = Array.from({length:8}, ()=>Math.floor(Math.random()*20));

let startTime = new Date().getTime();
selectionSort(arr);
let endTime = new Date().getTime();

console.log("소요 시간", endTime - startTime,"ms.")