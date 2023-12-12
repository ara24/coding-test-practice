// 단어 변환
// https://school.programmers.co.kr/learn/courses/30/lessons/43163

const begin = 'hit';
const target = 'cog';
const words = ["hot", "dot", "dog", "lot", "log", "cog"];
const _return = 4;

// const isConnected = (str1, str2) => {
//     let connection = 0;

//     for(let i = 0; i < str1.length; i++) {
//         if(str1[i] !== str2[i]) {
//             connection++;
//         }
//     }

//     return connection === 1;
// }

// function solution(begin, target, words) {
//     const visited = {};
//     const queue = [];

//     visited[begin] = 0;
//     queue.push(begin);

//     while(queue.length) {
//         const cur = queue.shift();

//         for(let word of words) {
//             if(isConnected(cur, word) && !visited[word]) {
//                 // 연결되어있고 방문 안했으면 방문
//                 visited[word] = visited[cur] + 1;
//                 queue.push(word);
//             }
//         }
//     }
    
//     console.log(visited);
//     console.log(visited[target]);

//     return visited[target] ? visited[target] : 0;
// }

// const isConnected = (str1, str2) => {
//     let count = 0;
//     for(let i = 0; i < str1.length; i++) {
//         if(str1[i] !== str2[i]) {
//             count += 1;
//         }
//     }

//     return count === 1;
// }

// function solution(begin, target, words) {
//     // bfs로 풀기
//     const visited = {};
//     const queue = [];
//     visited[begin] = 0;
//     queue.push(begin);

//     while(queue.length) {
//         const cur = queue.shift();

//         for(let word of words) {
//             // 연결되어있고, 방문 안했으면 방문
//             if(isConnected(cur, word) && !visited[word]) {
//                 visited[word] = visited[cur] + 1;
//                 queue.push(word);
//             }
//         }
//     }

//     return visited[target] ? visited[target] : 0;
// }


// 다른 문자가 1개 있는 경우에 연결된 것
const isConnected = (str1, str2) => {
    let count = 0;
    for(let i = 0; i < str1.length; i++) {
        if(str1[i] !== str2[i]) {
            count += 1;
        }
    }

    return count === 1;
}

function solution(begin, target, words) {
    const visited = {};
    const queue = [];
    visited[begin] = 0;
    queue.push(begin);

    while(queue.length) {
        const cur = queue.shift();

        for(let word of words) {
            // 연결되어있고, 방문 안한 것.
            if(isConnected(cur, word) && !visited[word]) {
                visited[word] = visited[cur] + 1; // 방문처리, step 기록
                queue.push(word);
            }
        }
    }

    return visited[target] ? visited[target] : 0;
}

console.log(solution(begin, target, words));
