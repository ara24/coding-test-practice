// 간단한 논리 연산 (조건문, 문자열)
// https://school.programmers.co.kr/learn/courses/30/lessons/181917

const x1 = false;
const x2 = true;
const x3 = true;
const x4 = true;
const result = false;

function solution(x1, x2, x3, x4) {
    // v 모양이 or, ㅅ 모양이 and
    return (x1 || x2) && (x3 || x4);
}

console.log(solution(x1, x2, x3, x4));