// 게임 맵 최단거리 (bfs)
// https://school.programmers.co.kr/learn/courses/30/lessons/1844

const maps = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]];
const answer = 11;

const maps1 = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]];
const answer1 = -1;

// 효율성 테스트 세 번쨰 항목 실패
// function solution(maps) {
//     console.log(maps);
//     const m = maps.length;
//     const n = maps[0].length;

//     const graph = {};

//     for(let i = 0; i < m; i++) {
//         for(let j=0; j < n; j++) {
//             if(maps[i][j] === 1) {
//                 const num = i * n + j + 1;
//                 maps[i][j] = num;
                
//                 if(!graph[num]) {
//                     graph[num] = [];
//                 }

//                 // 위
//                 if(i - 1 >= 0 && maps[i - 1][j] !== 0) {
//                     graph[num].push((i - 1) * n + j + 1);
//                 }

//                 // 아래
//                 if(i + 1 < m && maps[i + 1][j] !== 0) {
//                     graph[num].push((i + 1) * n + j + 1);
//                 }

//                 // 왼쪽
//                 if(j - 1 >= 0 && maps[i][j - 1] !== 0) {
//                     graph[num].push(i * n + j - 1 + 1);
//                 }

//                 // 오른쪽
//                 if(j + 1 < n && maps[i][j + 1] !== 0) {
//                     graph[num].push(i * n + j + 1 + 1);
//                 }
                
//             }
//         }
//     }

//     console.log(maps);
//     console.log(graph);

//     // 너비 우선 탐색
//     const visited = {'1': 1};
//     const queue = [1];
   
//     while(queue.length || !visited[m * n]) {
//         const cur = queue.shift();

//         try{
//             for(let next of graph[cur]) {
//                 if(!visited[next]) {
//                     visited[next] = visited[cur] + 1;
//                     queue.push(next);
//                 }
//             }
//         } catch(e) {
//             break;
//         }
//     }

//     console.log(visited);

//     return visited[m * n] ? visited[m * n] : -1;
// }

// function solution(maps) {
//     console.log(maps);
//     const yLength = maps.length;
//     const xLength = maps[0].length;
//     const goalY = yLength - 1;
//     const goalX = xLength - 1;

//     const queue = [[0, 0, 1]]; // 시작점

//     while(queue.length) {
//         const [y, x, step] = queue.shift();

//         // 스킵할 데이터
//         if(x < 0 || x >= xLength) continue;
//         if(y < 0 || y >= yLength) continue;
//         if(maps[y][x] === 0) continue;

//         // 도착지에 도착
//         if(x === goalX && y === goalY) {
//             return step;
//         }

//         // 방문 처리
//         maps[y][x] = 0;

//         // queue에 방문할 위치 추가
//         queue.push([y-1, x, step + 1]);
//         queue.push([y+1, x, step + 1]);
//         queue.push([y, x-1, step + 1]);
//         queue.push([y, x+1, step + 1]);
//     }

//     return -1;
// }

function solution(maps) {
    const yLength = maps.length;
    const xLength = maps[0].length;
    const goalY = yLength - 1;
    const goalX = xLength - 1;

    const queue = [[0, 0, 1]]; // 시작점

    while(queue.length) {
        const [y, x, step] = queue.shift();

        // 스킵할 데이터
        if(x < 0 || x >= xLength) continue;
        if(y < 0 || y >= yLength) continue;
        if(maps[y][x] === 0) continue;

        // 도착지에 도착
        if(x === goalX && y === goalY) {
            return step;
        }

        // 방문처리
        maps[y][x] = 0;

        // queue에 방문할 위치 추가
        queue.push([y-1, x, step + 1]);
        queue.push([y+1, x, step + 1]);
        queue.push([y, x-1, step + 1]);
        queue.push([y, x+1, step + 1]);
    }

    return -1;
}

console.log(solution(maps));
// console.log(solution(maps1));