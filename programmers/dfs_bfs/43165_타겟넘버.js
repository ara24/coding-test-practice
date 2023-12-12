// 타겟 넘버 (깊이 우선 탐색 dfs)
// https://school.programmers.co.kr/learn/courses/30/lessons/43165

const numbers = [1, 1, 1, 1, 1];
const target = 3;
const _return = 5;

// function solution(numbers, target) {
//     let answer = 0;

//     const dfs = (index, sum) => {
//         if(index === numbers.length) {
//             if(sum === target) {
//                 answer += 1;
//             }
//             return;
//         }


//         dfs(index + 1, sum + numbers[index]);
//         dfs(index + 1, sum - numbers[index]);
//     }

//     dfs(0, 0);

//     return answer;
// }

function solution(numbers, target) {
    let answer = 0;

    const dfs = (index, sum) => {
        
    }
}

console.log(solution(numbers, target));