// 전국 대회 선발 고사
// https://school.programmers.co.kr/learn/courses/30/lessons/181851

const rank = [3, 7, 2, 5, 4, 6, 1];
// const rank = [1,2,3];
const attendance = [false, true, true, true, true, false, false];
// const attendance = [true, true, true];
const result = 20403;
// const result = 102;

function solution(rank, attendance) {
    const [a, b, c] = rank.map((v,i) => [v, i]).filter((v, i) => attendance[i]).sort((a,b) => a[0] - b[0]);
    return (10000 * a[1]) + (100 * b[1]) + c[1];
}

console.log(solution(rank, attendance));