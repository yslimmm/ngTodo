// 응용과제, 아래 배열 3개의 구성요소를 모두 더해서 55가 출력되게 하시오.
// 최대한 간단하게 하시오.
let array1 = [1,2,3];
let array2 = [4,5];
let array3 = [6,7,8,9,10];




let arr = [...array1, ...array2, ...array3];

// reduce (=sum) :: reduce mdn 검색해서 참고
// index 0, 1 더해서 prev에 넣고 prev와 다음 curr(2)와 더해서 prev에 넣고...
let sum = arr.reduce((prev, curr) => prev + curr);
console.log(sum);
