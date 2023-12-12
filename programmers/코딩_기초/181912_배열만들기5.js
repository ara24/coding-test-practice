// 배열 만들기 5
// https://school.programmers.co.kr/learn/courses/30/lessons/181912

const intStrs = ["0123456789","9876543210","9999999999999"];
const k = 50000;
const s = 5;
const l = 5;

function solution(intStrs, k, s, l) {
    const answer = [];
    
    intStrs.forEach((v) => {
        const value = v.slice(s, s+l);
        if(value > k) {
            answer.push(+value);
        }
    })

    return answer;
}

solution(intStrs, k, s, l);