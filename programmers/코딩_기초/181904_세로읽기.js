// 세로 읽기
// https://school.programmers.co.kr/learn/courses/30/lessons/181904

const my_string = "ihrhbakrfpndopljhygc";
const m = 4;
const c = 2;

function solution(my_string, m, c) {
    let answer = '';
    for(let i = 0; i < my_string.length ; i++) {
        if(i % m === c - 1) {
            answer += my_string[i];
        }
    }
    
    return answer;
}

solution(my_string, m, c);