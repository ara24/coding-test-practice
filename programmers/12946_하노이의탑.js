// 하노이의 탑
// https://school.programmers.co.kr/learn/courses/30/lessons/12946

// 풀이 참고: https://jiwoo84.tistory.com/115

const n = 2;
const result = [[1,2], [1,3], [2,3]];

function solution(n) {
    var answer = [];

    function hanoi(n, from, to, via) {
        if(n === 1) answer.push([from, to]);
        else {
            hanoi(n-1, from, via, to);
            answer.push([from,to]);
            hanoi(n-1, via, to, from);
        }
    }

    hanoi(n, 1,3,2);
    return answer;
}

const _solution = solution(n);
console.log(_solution);