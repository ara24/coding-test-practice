// 콜라츠 수열 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/181919

const n = 10;
const result = [10, 5, 16, 8, 4, 2, 1];

// function solution(n) {
//     const answer = [n];

//     while(true) {
//         const target = answer[answer.length - 1];
//         if(target === 1) {
//             break;
//         }

//         if(target % 2 === 1) {
//             answer.push(3 * target + 1);
//         } else {
//             answer.push(target / 2);
//         }
//     }

//     return answer;
// }

function solution(n, arr = []) {
    arr.push(n);
    if(n === 1) return arr;

    if(n % 2 === 0) return solution(n / 2, arr);
    return solution(3 * n + 1, arr);

}

console.log(solution(n));