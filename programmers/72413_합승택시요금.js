// 합승 택시 요금
// https://school.programmers.co.kr/learn/courses/30/lessons/72413

// 플로이드 와샬 알고리즘 https://blog.naver.com/ndb796/221234427842


const n = 6;
const s = 4;
const a = 6;
const b = 2;
const fares = [[4, 1, 10], [3, 5, 24], [5, 6, 2], [3, 1, 41], [5, 1, 24], [4, 6, 50], [2, 4, 66], [2, 3, 22], [1, 6, 25]];
const result = 82;

// function solution(n, s, a, b, fares) {
//     // ----- 그래프를 DP 배열로 변경
//     const board = new Array(n).fill().map(_ => new Array(n).fill(Infinity));

//     for(let i = 0; i < n; i++) {
//         board[i][i] = 0;
//     }

//     fares.forEach(pos => {
//         const [x, y, weight] = pos;
//         board[x-1][y-1] = weight;
//         board[y-1][x-1] = weight;
//     })
//     // -------

//     console.log(board);

//     // ----- k는 경유노드, i는 시작노드, j는 도착노드
//     for(let k = 0; k < n; k++) {
//         for(let i = 0; i < n; i++) {
//             for(let j = 0; j < n; j++) {
//                 // i -> k -> j 가 빠른지 i -> j가 빠른지 비교해서 빠른 것으로 교체
//                 if(board[i][k] + board[k][j] < board[i][j]) {
//                     board[i][j] = board[i][k] + board[k][j];
//                 }
//             }
//         }
//     }

//     console.log(board);

//     // 따로 가는 경우
//     let answer = board[s-1][a-1] + board[s-1][b-1];
//     console.log(board[s-1][a-1], board[s-1][b-1]);
    
//     for(let i = 0; i < n; i++) {
//         // i까지 같이가고, i부터 각자 이동 
//         const shortest = board[s-1][i] + board[i][a-1] + board[i][b-1];
//         answer = Math.min(answer, shortest);
//     }
//     console.log(answer);
//     // var answer = 0;
//     return answer;
// }

function solution(n, s, a, b, fares) {
    const board = Array(n).fill().map(v => new Array(n).fill(Infinity));

    for(let i = 0; i < n; i++) {
        board[i][i] = 0;
    }

    fares.forEach(pos => {
        const [x, y, weight] = pos;
        board[x-1][y-1] = weight;
        board[y-1][x-1] = weight;
    })

    console.log(board);

    // 최단거리 구하기 ?
    for(let k = 0; k < n; k++) {
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < n; j++) {
                if(board[i][k] + board[k][j] < board[i][j]) {
                    // i -> k -> j가 더 빠르면 이 값으로 교체
                    board[i][j] = board[i][k] + board[k][j];
                }
            }
        }
    }

    console.log(board);

    let answer = board[s-1][a-1] + board[s-1][b-1];
    // console.log(answer);
    for(let i = 0; i < n; i++) {
        const shortest = board[s-1][i] + board[i][a-1] + board[i][b-1];
        answer = Math.min(answer, shortest);
    }
    console.log(answer);

}

// ------------------------------------------------------------------------------

// 다시 풀어보기

function solution(n, s, a, b, fares) {
    // dp 보드 만들기
    const board = Array(n).fill().map(v => Array(n).fill(Infinity));

    // 겹치는 위치 0으로 세팅
    for(let i=0; i<n ; i++) {
        board[i][i] = 0;
    }

    // 경로 세팅
    fares.forEach(pos => {
        const [x, y, weight] = pos;
        board[x-1][y-1] = weight;
        board[y-1][x-1] = weight;
    })

    // x -> y 경로가 저렴한지 x -> z -> y가 저렴한지 확인 후 갱신
    for(let k=0; k<n; k++) {
        for(let i=0; i<n; i++) {
            for(let j=0; j<n; j++) {
                if(board[i][k] + board[k][j] < board[i][j]) {
                    board[i][j] = board[i][k] + board[k][j];
                }
            }
        }
    }

    // 각자 가는 경우
    let answer = board[s-1][a-1] + board[s-1][b-1];

    // 함께 i까지 가는 경우의 비용과 그동안의 제일 적은 비용의 경우를 비교해서 더 적은 비용의 값 저장
    for(let i=0; i<n; i++) {
        const shortest = board[s-1][i] + board[i][a-1] + board[i][b-1];
        answer = Math.min(answer, shortest);
    }

    // console.log(board);
    // console.log('answer', answer);
    
    return answer;

}


solution(n, s, a, b, fares);

