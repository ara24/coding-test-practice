// 정수 삼각형 (동적계획법 Dynamic Programing)
// https://school.programmers.co.kr/learn/courses/30/lessons/43105

const triangle = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];
const result = 30;

// down-up 방식
// function solution(triangle) {
//     const dp = triangle.slice();

//     for(let i = dp.length - 2; i >= 0; i--) {
//         for(let j = 0; j < dp[i].length; j++) {
//             dp[i][j] += Math.max(dp[i+1][j], dp[i+1][j+1]);
//         }
//     }

//     return dp[0][0];
// }

// ------------------------------------------------------------------------------

// 복습
function solution(triangle) {
    const dp = triangle.slice();

    for(let i = dp.length - 2; i >= 0; i--) {
        for(let j = 0; j < dp[i].length; j++) {
            dp[i][j] += Math.max(dp[i+1][j], dp[i+1][j+1]);
        }
    }

    return dp[0][0];
}

solution(triangle);