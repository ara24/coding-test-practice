// 수열과 구간 쿼리2
// https://school.programmers.co.kr/learn/courses/30/lessons/181923

const arr = [0, 1, 2, 4, 3];
const queries = [[0, 4, 2],[0, 3, 2],[0, 2, 2]];
const result = [3, 4, -1];

// function solution(arr, queries) {
//     const answer = [];

//     queries.forEach(([s, e, k]) => {
//         const _arr = arr.slice(s, e + 1).filter(v => v > k);
//         answer.push(_arr.length === 0 ? -1 : Math.min(..._arr));
//     })

//     return answer;
// }

function solution(arr, queries) {
    return queries.map(([s, e, k]) => {
        const _arr = arr.slice(s, e + 1).filter(v => v > k);
        return _arr.length === 0 ? -1 : Math.min(..._arr);
    })
}

solution(arr, queries);