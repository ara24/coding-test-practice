// 순위
// https://school.programmers.co.kr/learn/courses/30/lessons/49191

const n = 5;
const results = [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]];
const _return = 2;

function solution(n, results) {
    const graph = Array(n+1).fill().map(v => Array(n+1).fill(false));

    results.forEach(result => {
        const [winner, loser] = result;
        graph[winner][loser] = 1;
        graph[loser][winner] = -1;
        graph[winner][winner] = 0;
        graph[loser][loser] = 0;
    })

    const rangeN = Array(n).fill().map((v,i) => i+1);

    for(let mid of rangeN) {
        for(let a of rangeN) {
            for(let b of rangeN) {
                // a가 mid를 이기고 mid가 b를 이기면, a가 b를 이긴 것
                if(graph[a][mid] === 1 && graph[mid][b] === 1) {
                    graph[a][b] = 1;
                }
                //  a가 mid에게 지고, mid가 b에게 지면, a가 b에게 진 것
                if(graph[a][mid] === -1 && graph[mid][b] === -1) {
                    graph[a][b] = -1;
                }
            }
        }
    }

    let answer = 0;
    // false가 없는 배열 찾기(순위를 알 수 있음)
    for(let i=1; i <= n; i++) {
        let hasFalse = false;
        for(let j=1; j<=n; j++) {
            if(graph[i][j] === false) {
                hasFalse = true;
            }
            continue;
        }
        if(!hasFalse) {
            answer += 1;
        }
    }

    return answer;
}

solution(n, results);