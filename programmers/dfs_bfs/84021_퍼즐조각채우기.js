// 퍼즐 조각 채우기(빈공간 또는 블록 영역 찾기는 dfs)
// https://school.programmers.co.kr/learn/courses/30/lessons/84021

const game_board = [[1,1,0,0,1,0],[0,0,1,0,1,0],[0,1,1,0,0,1],[1,1,0,1,1,1],[1,0,0,0,1,0],[0,1,1,1,0,0]];
const table = [[1,0,0,1,1,0],[1,0,1,0,1,0],[0,1,1,0,1,1],[0,0,1,0,0,0],[1,1,0,1,1,0],[0,1,0,0,0,0]];
const _result = 14;

// 게임 보드의 빈 칸을 배열에 담는다
// 테이블의 블록을 배열에 담는다
// 게임보드의 빈 칸과 블록을 담은 배열을 비교
// 동일한 모양의 빈칸과 블록을 찾았다면 해당 블록의 크기를 구한다. 빈칸을 채운다.
// 채워진 빈칸의 개수를 더한다

function solution(game_board, table) {
    const length = game_board.length;
    console.log(game_board);

    function getString(block) {
        return block.map(v => v.join('')).join(',');
    }

    function findBlocks(board, col, row, number) {
        // 빈칸 인덱스 저장
        const coord = [];
        // 몇개의 빈칸이 연결되어있는지
        let count = 1;

        board[col][row] = -1; // 방문했다는 표시?
        coord.push([col, row]);

        // 인접한 곳 탐색
        function excute(board, col, row, number) {
            // top
            const top = col - 1;
            if(top >= 0 && board[top][row] === number) {
                coord.push([top, row]);
                count++;
                board[top][row] = -1;

                // 다음 인접한 top 탐색
                excute(board, top, row, number);
            }

            // bottom
            const bottom = col + 1;
            if(bottom >= 0 && board[bottom] && board[bottom][row] === number) {
                coord.push([bottom, row]);
                count++;
                board[bottom][row] = -1;

                // 다음 인접한 bottom 탐색
                excute(board, bottom, row, number);
            }

            // left
            const left = row - 1;
            if(left >= 0 && board[col][left] === number) {
                coord.push([col, left]);
                count++;
                board[col][left] = -1;

                // 다음 인접한 left 탐색
                excute(board, col, left, number);
            }

            // right
            const right = row + 1;
            if(right >= 0 && board[col][right] === number) {
                coord.push([col, right]);
                count++;
                board[col][right] = -1;

                // 다음 인접한 right 탐색
                excute(board, col, right, number);
            }
        }

        excute(board, col, row, number);
        // console.log('coord', coord);
        const cols = coord.map(v => v[0]);
        const rows = coord.map(v => v[1]);
        
        // 조각을 slice 할 col,row의 최소,최대값
        const min_col = Math.min(...cols);
        const max_col = Math.max(...cols);
        const min_row = Math.min(...rows);
        const max_row = Math.max(...rows);
        // console.log(min_col, max_col, min_row, max_row);
        // console.log(board);

        const block = board.slice(min_col, max_col + 1).map((v, i) => {
            return v.slice(min_row, max_row + 1)
            .map((x,j) => coord.find(v => v[0] === min_col + i && v[1] === min_row + j) ? count : 0);
        })

        // console.log('block', block);

        return block;
    }
    
    // 빈칸 배열
    const spaces = [];
    for(let i = 0; i < length; i++) {
        for(let j = 0; j < length; j++) {
            if(game_board[i][j] === 0) {
                spaces.push(getString(findBlocks(game_board, i, j, 0)));
            }
        }
    }
    
    // console.log('space', space);

    // 블록 회전
    function rotate(block) {
        const shape = [];

        let blockCopy = block.slice();
        let count = 0; // 회전 수
        while(count < 3) {
            const col = blockCopy.length;
            const row = blockCopy[0].length;

            const newBlock = new Array(row).fill().map(v => new Array(col).fill(0));

            for(let i = 0; i < col; i++){
                for(let j = 0; j < row; j++){
                    newBlock[j][col - 1 - i] = blockCopy[i][j];
                }
            }

            count++;
            shape.push(getString(newBlock));
            blockCopy = newBlock.slice();
        }

        return shape;
    }

    // 블록 담을 배열
    const blocks = [];
    for(let i = 0; i < length; i++) {
        for(let j = 0; j < length; j++) {
            if(table[i][j] === 1) {
                const block = findBlocks(table, i, j, 1);

                // 원래 블록과 회전한 블록을 함께 담는다.
                blocks.push([getString(block), ... rotate(block)]);
            }
        }
    }

    console.log('spaces', spaces);
    console.log('blocks', blocks);

    let answer = 0;

    for(let i = 0; i < blocks.length; i++) {
        for(let j = 0; j < blocks[0].length; j++) {
            const currentBlock = blocks[i][j];
            const findIndex = spaces.findIndex(space => space === currentBlock);
            if(findIndex > -1) {
                const num = spaces.splice(findIndex, 1)[0].match(/[1-6]/)[0] * 1;
                answer += num;
                break;
            }
            console.log('spaces', spaces);
        }
    }

    console.log(answer);

    return answer;
}

solution(game_board, table);