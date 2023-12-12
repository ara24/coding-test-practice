// N으로 표현 (동적계획법 Dynamic Programming)
// https://school.programmers.co.kr/learn/courses/30/lessons/42895

const N = 5;
const number = 12;
const result = 4;

// function solution(N, number) {
//     const sets = Array(9).fill().map(v => new Set());

//     for(let i = 0; i < 8; i++) {
//         sets[i].add(Number(String(N).repeat(i + 1)));
//         for(let j = 0; j < i; j++) {
//             for(let arg1 of sets[j]) {
//                 for(let arg2 of sets[i - j - 1]) {
//                     sets[i].add(arg1 + arg2);
//                     sets[i].add(arg1 - arg2);
//                     sets[i].add(arg1 * arg2);
//                     sets[i].add(Math.floor(arg1 / arg2));
//                 }
//             }
//         }

//         console.log(sets);

//         if(sets[i].has(number)) {
//             console.log(i+1);
//             return i+1;
//         }
//     }

//     return -1;
// }

// -------------------------------------------------------

// 다시 풀어보기

// function solution(N, number) {
//     const min = 8;
//     const sets = Array(min).fill().map(v => new Set());

//     for(let i = 0; i < min; i++) {
//         sets[i].add(Number(String(N).repeat(i+1)));
//         if(sets[i].has(number)) return i + 1;

//         for(let j = 0; j < i; j++) {
//             // N이 j번 있는 경우의 값과 N이 i-j-i 번 있는 경우의 값을 사칙연산
//             for(let value1 of sets[j]) {
//                 for(let value2 of sets[i-j-1]) {
//                     sets[i].add(value1 + value2);
//                     sets[i].add(value1 - value2);
//                     sets[i].add(value1 * value2);
//                     sets[i].add(Math.floor(value1 / value2));
//                 }
//             }

//             if(sets[i].has(number)) return i + 1;
//         }
//     }
//     return -1;
// }

// ----- 다시 풀기

function solution(N, number) {
  const min = 8;
  const sets = Array(min)
    .fill()
    .map((v) => new Set());

  for (let i = 0; i < min; i++) {
    sets[i].add(Number(String(N).repeat(i + 1))); // 555
    if (sets[i].has(number)) return i + 1;

    for (let j = 0; j < i; j++) {
      for (let value1 of sets[j]) {
        for (let value2 of sets[i - j - 1]) {
          sets[i].add(value1 + value2);
          sets[i].add(value1 - value2);
          sets[i].add(value1 * value2);
          sets[i].add(Math.floor(value1 / value2));
        }
      }
    }

    if (sets[i].has(number)) return i + 1;
  }

  return -1;
}

solution(N, number);
