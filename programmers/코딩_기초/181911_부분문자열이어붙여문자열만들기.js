// 부분 문자열 이어 붙여 문자열 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/181911

const my_strings = ["progressive", "hamburger", "hammer", "ahocorasick"];
const parts = [[0, 4], [1, 2], [3, 5], [7, 7]];

function solution(my_strings, parts) {
    let answer = '';

    my_strings.forEach((str, i) => {
        const [s, e] = parts[i];
        answer += str.slice(s, e + 1);
    })
    
    return answer;
}

console.log(solution(my_strings, parts));