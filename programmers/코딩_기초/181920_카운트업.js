// 카운트업
// https://school.programmers.co.kr/learn/courses/30/lessons/181920

const start_num = 3;
const end_num = 10;
const result = [3,4,5,6,7,8,9,10];

function solution(start_num, end_num) {
    return Array(end_num - start_num + 1).fill(start_num).map((v, i) => v + i);
}

solution(start_num, end_num);