// 글자 이어 붙여 문자열 만들기 (조건문, 문자열)
// https://school.programmers.co.kr/learn/courses/30/lessons/181915

const my_string = "cvsgiorszzzmrpaqpe";
const index_list = [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7];
const result = "programmers";

function solution(my_string, index_list) {
    return index_list.reduce((acc, cur) => acc + my_string[cur], '');
}

console.log(solution(my_string, index_list));