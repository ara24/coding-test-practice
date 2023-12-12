// 등굣길 (동적계획법 Dynamic Programming)
// https://school.programmers.co.kr/learn/courses/30/lessons/42898

const m = 4;
const n = 3;
const puddles = [[2,2]];
const result = 4;

// const isPuddle = (x, y, puddles) => {
//     for(let i = 0; i < puddles.length; i++) {
//         const [px, py] = puddles[i];
//         if(px === x && py === y) {
//             return true;
//         }
//     }
//     return false;
// }

// function solution(m, n, puddles) {
//     const dp = Array(n+1).fill().map(v => new Array(m+1).fill(0));
//     // 왼쪽과 위쪽을 더해야 할 때 편하게 더하기 위해 배열의 행과 열을 한 개씩 추가

//     for(let i = 1; i <= n; i++) {
//         for(let j = 1; j <= m; j++) {
//             if(i === 1 && j === 1) {
//                 dp[1][1] = 1;
//                 continue;
//             }

//             if(isPuddle(j, i, puddles)) continue;
//             dp[i][j] = (dp[i-1][j] + dp[i][j-1]) % 1000007;
//         }
//     }
    
//     return dp[n][m];
// }

// ------------------------------------------------------------------------------

// 복습

const isPuddle = (x, y, puddles) => {
    for(let i = 0; i < puddles.length; i++) {
        const [px, py] = puddles[i];
        
        if(px === x && py === y) {
            return true;
        }
        return false;
    }

}

function solution(m, n, puddles) {
    const dp = Array(n+1).fill().map(v => Array(m+1).fill(0));
    // 왼쪽과 위쪽을 더할 때 편하게 하기 위해 배열의 행과 열을 한 개씩 추가

    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= m; j++) {
            // 집
            if(i === 1 && j === 1) {
                dp[i][j] = 1;
                continue;
            }

            // 웅덩이 패스
            if(isPuddle(j, i, puddles)) continue;

            // 왼쪽 경로와 위쪽 경로 더하기
            dp[i][j] = (dp[i-1][j] + dp[i][j-1]) % 1000000007;
        }
    }

    return dp[n][m];
}

solution(m, n, puddles);