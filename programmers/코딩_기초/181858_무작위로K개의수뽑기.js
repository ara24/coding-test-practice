// 무작위로 K개의 수 뽑기
// https://school.programmers.co.kr/learn/courses/30/lessons/181858

const arr = [0, 1, 1, 2, 2, 3];
const k = 3;

function solution(arr, k) {
    const set = new Set(arr);
    return [...set, ...Array(k).fill(-1)].slice(0, k);;
}

console.log(solution(arr, k));