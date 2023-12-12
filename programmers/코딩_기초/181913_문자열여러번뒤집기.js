// 문자열 여러 번 뒤집기 (조건문, 문자열)
// https://school.programmers.co.kr/learn/courses/30/lessons/181913

const my_string = "rermgorpsam";
const queries = [[2, 3], [0, 7], [5, 9], [6, 10]];
const result = "programmers";

function solution(my_string, queries) {
    const answer = [...my_string];

    queries.forEach(([s,e]) => {
        const target = answer.slice(s, e + 1);
        const reversed = target.reverse();

        answer.splice(s, e - s + 1, ...reversed);
    })

    return answer.join('');
}

console.log(solution(my_string, queries));