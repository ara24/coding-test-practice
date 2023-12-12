// 네트워크 (dfs)
// https://school.programmers.co.kr/learn/courses/30/lessons/43162

const n = 3;
const computers = [[1, 1, 0], [1, 1, 0], [0, 0, 1]];
const _return = 2;

// function solution(n, computers) {
//     const visited = [];
//     let answer = 0;

//     // 깊이 우선 탐색
//     // 탈출하는 코드는 별도로 없고, 방문을 했는지 확인
//     const dfs = (i) => {
//         visited[i] = true;

//         for(let j = 0; j < n; j++) {
//             if(computers[i][j] === 1 && !visited[j]) {
//                 dfs(j);
//             }
//         }
//     }

//     // i 노드 방문하지 않았다면 방문 시작. 방문할 떄마다 카운트 올려줌.
//     for(let i = 0; i < n; i++) {
//         if(!visited[i]) {
//             dfs(i);
//             answer++;
//         }
//     }

//     return answer;
// }


function solution(n, computers) {
    const visited = [];
    let answer = 0;

    const dfs = (i) => {
        // 방문했으면 true
        visited[i] = true;

        // 나머지 방문
        for(let j = i; j < n; j++) {
            // 연결되어있는데 방문 안한 것 방문.
            if(computers[i][j] === 1 && !visited[j]) {
                dfs(j);
            }
        }
    }

    // n개 네트워크 들르기
    for(let i = 0; i < n; i++) {
        if(!visited[i]) {
            dfs(i);
            answer++;
        }
    }

    return answer;
}


console.log(solution(n, computers));
