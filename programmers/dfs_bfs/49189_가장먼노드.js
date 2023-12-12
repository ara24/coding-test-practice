// 가장 먼 노드 (너비우선탐색 bfs)
// https://school.programmers.co.kr/learn/courses/30/lessons/49189

const n = 6;
const vertex = [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]];
const _return = 3;

// 배열로 푸는법
// function solution(n, edge) {
//     const connects = Array(n).fill().map(v => []);

//     for(let e of edge) {
//         connects[e[0]-1].push(e[1]-1);
//         connects[e[1]-1].push(e[0]-1);
//     }

//     const visited = [1];
//     const queue = [0];

//     while(queue.length) {
//         let cur = queue.shift();

//         for(let nextNode of connects[cur]) {
//             if(!visited[nextNode]) {
//                 visited[nextNode] = visited[cur] + 1;
//                 queue.push(nextNode);
//             }
//         }
//     }

//     const max = Math.max(...visited);
//     const answer =  visited.filter((value) => value === max).length;

//     return answer;
// }

// object로 푸는 법
// function solution(n, edge) {
//     // graph 훑는 문제. 제일 멀리 있는 노드의 개수 찾기

//     // 노드 관계 정리
//     const connects = {};
//     edge.forEach((e) => {
//         const [node1, node2] = e;
//         connects[node1] = (connects[node1] || []).concat(node2);
//         connects[node2] = (connects[node2] || []).concat(node1);
//     })

//     // 너비 우선 탐색
//     const visited = {'1': 1};
//     const queue = [1];
//     while(queue.length) {
//         const cur = queue.shift();

//         for(let next of connects[cur]) {
//             if(!visited[next]) {
//                 visited[next] = visited[cur] + 1;
//                 queue.push(next);
//             }
//         }
//     }

//     const values = Object.values(visited);
//     const max = Math.max(...values);
//     return values.filter(v => v === max).length;
// }

// -------------------------------------------------------

// 복습

// function solution(n, edge) {
//     // 가장 먼 노드 찾기

//     // 1~n에 연결된 노드 구조 만들기
//     console.log(edge);
//     const connects = {};
//     edge.forEach(e => {
//         const [node1, node2] = e;
//         connects[node1] = (connects[node1] || []).concat(node2);
//         connects[node2] = (connects[node2] || []).concat(node1);
//     })

//     console.log(connects);

//     // 너비 우선 탐색으로 연결된 노드 에 가중치 추가

//     const visited = {'1': 1};
//     const queue = [1]; // 시작 노드 세팅

//     while(queue.length) {
//         // queue에서 1개 꺼냄
//         const cur = queue.shift();

//         for(let next of connects[cur]) {
//             if(!visited[next]) {
//                 visited[next] = visited[cur] + 1;
//                 queue.push(next);
//             }
//         }
//     }

//     console.log(visited);

//     // max 값 찾아서 개수 반환하기
//     const connectionLength =  Object.values(visited);
//     const max = Math.max(...connectionLength);
//     return connectionLength.filter(v => v === max).length;
// }

function solution(n, edge) {
    // 노드 관계 정리
    const connects = {};
    edge.forEach(ed => {
        const [node1, node2] = ed;
        connects[node1] = (connects[node1] || []).concat(node2);
        connects[node2] = (connects[node2] || []).concat(node1);
    })

    console.log(connects);
    // 너비우선탐색
     
    const visited = {'1': 1};
    const queue = [1];
    while(queue.length) {
        const cur = queue.shift();

        for(let next of connects[cur]) {
            if(!visited[next]) {
                visited[next] = visited[cur] + 1;
                queue.push(next);
            }
        }
    }

    console.log(visited);

    const values = Object.values(visited);
    const max = Math.max(...values);
    return values.filter(v => v === max).length;
}

console.log(solution(n, vertex));