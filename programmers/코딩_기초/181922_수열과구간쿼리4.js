// 수열과 구간 쿼리 4
// https://school.programmers.co.kr/learn/courses/30/lessons/181922

const arr = [0, 1, 2, 4, 3];
const queries = [[0, 4, 1],[0, 3, 2],[0, 3, 3]];
const result = [3, 2, 4, 6, 4];

function solution(arr, queries) {
    for(let j = 0; j < queries.length; j++) {
        const [s, e, k] = queries[j];
        for(let i = s; i <= e; i++) {
            if(i % k === 0) {
                arr[i]++;
            }
        }
    }

    return arr;
}

console.log(solution(arr, queries));