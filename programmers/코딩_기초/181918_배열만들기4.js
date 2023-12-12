// 배열 만들기 4
// https://school.programmers.co.kr/learn/courses/30/lessons/181918

const arr = [1,4,2,5,3];
const result = [1,2,3];

function solution(arr) {
    const stk = [];
    let i = 0;

    while(i < arr.length) {
        if(stk.length === 0 || stk.length > 0 && stk[stk.length - 1] < arr[i]) {
            stk.push(arr[i]);
            i++;
        } 

        if(stk.length && stk[stk.length - 1] >= arr[i]) {
            stk.pop();
        }
    }

    return stk;
}

solution(arr);