// 정수를 나선형으로 배치하기 (이차원 배열)
// https://school.programmers.co.kr/learn/courses/30/lessons/181832

const n = 5;

function solution(n) {
    const arr = Array(n).fill([]).map(v => Array(n).fill(-1));

    let rowVariance = [0, 1, 0, -1];
    let colVariance = [1, 0, -1, 0];
    let varianceIndex = 0;
    let row = 0;
    let col = 0;

    for(let i = 0; i < n * n; i++) {
        arr[row][col] = i + 1;

        let nextRow = row + rowVariance[varianceIndex];
        let nextCol = col + colVariance[varianceIndex];

        // 다음 위치가 범위 밖이거나 이미 다른 값이 들어가있는 경우, 방향 전환
        if(!arr[nextRow] || !arr[nextRow][nextCol] || arr[nextRow][nextCol] > -1) {
            varianceIndex = (varianceIndex + 1) % rowVariance.length;
            nextRow = row + rowVariance[varianceIndex];
            nextCol = col + colVariance[varianceIndex];
        }

        row = nextRow;
        col = nextCol;
    }
    
    return arr;
}

console.log(solution(n));