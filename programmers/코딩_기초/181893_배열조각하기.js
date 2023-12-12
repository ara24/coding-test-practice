// 배열 조각하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181893

const arr = [0, 1, 2, 3, 4, 5];
const query = [4, 1, 2];
const result = [1, 2, 3];

function solution(arr, query) {
    let answer = arr.slice();

    query.forEach((v, i) => {
        if(i % 2 === 0) {
            answer = answer.slice(0, v + 1);
        } else {
            answer = answer.slice(v);;
        }
    })

    return answer;
}

console.log(solution(arr, query));