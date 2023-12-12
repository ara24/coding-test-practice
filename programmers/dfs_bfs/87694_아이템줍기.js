// 아이템 줍기 (너비우선탐색 bfs)
// https://school.programmers.co.kr/learn/courses/30/lessons/87694

// 다른 사람 풀이도 살펴보기!

const rectangle = [[1,1,7,4],[3,2,5,5],[4,3,6,9],[2,6,8,8]];
const characterX = 1;
const characterY = 3;
const itemX = 7;
const itemY = 8;

// 최단 거리 문제. bfs로 풀어야 함
// 시작지점: characterX, characterY
// 도착지정: itemX, itemY
function solution(rectangle, characterX, characterY, itemX, itemY) {

    let maxX = 0;
    let maxY = 0;
    for(let pos of rectangle) {
        const [x1, y1, x2, y2] = pos;
        maxX = Math.max(maxX, x2);
        maxY = Math.max(maxY, y2);
    }
    // console.log(maxX, maxY);

    // 보드 판 만들기
    const board = Array(maxX * 2 + 2).fill(0).map(v => Array(maxY * 2 + 2).fill(0));
    const visited = Array(maxX  * 2 + 2).fill(0).map(v => Array(maxY * 2 + 2).fill(false));

    for(let pos of rectangle) {
        const [x1, y1, x2, y2] = pos;
        
        for(let i = x1*2; i <= x2*2; i++) {
            for(let j = y1*2; j <= y2*2; j++) {
                board[i][j] = 1;
            }
        }
    }
    // console.log(board);

    const queue = [[characterX*2, characterY*2, 0]]; // [시작점x, 시작점y, step]

    while(queue.length) {
        const [x, y, step] = queue.shift();

        // 스킵
        if(!board[x] || !board[x][y]) continue;
        if(visited[x][y]) continue;
        if(!isEdge(board, x, y)) continue;

        // 도착지에 도착
        if(x === itemX * 2 && y === itemY * 2) {
            return step / 2;
        }

        // 방문처리
        visited[x][y] = true;

        // queue에 방문할 위치 추가
        queue.push([x-1, y, step + 1]);
        queue.push([x+1, y, step + 1]);
        queue.push([x, y-1, step + 1]);
        queue.push([x, y+1, step + 1]);
    }

    return -1;
}

const isEdge = (board, x, y) => {
    if((board[x-1][y] === 1)
    && (board[x+1][y] === 1)
    && (board[x][y-1] === 1)
    && (board[x][y+1] === 1)
    && (board[x-1][y-1] === 1)
    && (board[x-1][y+1] === 1)
    && (board[x+1][y-1] === 1)
    && (board[x+1][y+1] === 1)) {
        return false;
    }
    return true;
}

console.log(solution(rectangle, characterX, characterY, itemX, itemY));
