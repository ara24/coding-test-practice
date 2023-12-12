// 배열 만들기 2
// https://school.programmers.co.kr/learn/courses/30/lessons/181921

const l = 5;
// const l = 55;
const r = 555;
const result = [5, 50, 55, 500, 505, 550, 555];
// const result = [55, 500, 505, 550, 555];

function solution(l, r) {
    // 자릿수 확인
    const lLength = l.toString().length;
    const rLength = r.toString().length;

    const arr = [];
    for(let i = Math.pow(2, lLength-1) ; i < Math.pow(2,rLength); i++) {
        const value = i.toString(2) * 5;
        if(l <= value && r >= value) {
            arr.push(i.toString(2) * 5);
        }
    }

    return arr.length === 0 ? -1 : arr;
}

solution(l, r);