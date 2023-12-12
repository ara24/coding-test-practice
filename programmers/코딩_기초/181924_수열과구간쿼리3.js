// 수열과 구간 쿼리3
// https://school.programmers.co.kr/learn/courses/30/lessons/181924

const arr = [0, 1, 2, 3, 4];
const queries = [[0, 3],[1, 2],[1, 4]];
const result = [3, 4, 1, 0, 2];

// function solution(arr, queries) {

//     const swap = (a,b) => {
//         [arr[a], arr[b]] = [arr[b], arr[a]];
//     }

//     for(let i = 0; i < queries.length; i++) {
//         const query = queries[i];
//         swap(query[0], query[1]);
//     }

//     return arr;
// }

function solution(arr, queries) {
    for(let i = 0; i < queries.length; i++) {
        const [a,b] = queries[i];
        [arr[a], arr[b]] = [arr[b], arr[a]];
    }
    
    return arr;
}

solution(arr, queries);