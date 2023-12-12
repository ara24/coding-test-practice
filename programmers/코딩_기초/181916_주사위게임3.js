// 주사위 게임 3 (조건문, 문자열)
// https://school.programmers.co.kr/learn/courses/30/lessons/181916

// const a = 2;
// const b = 2;
// const c = 2;
// const d = 2;

const a = 6;
const b = 4;
const c = 2;
const d = 5;

function solution(a, b, c, d) {
    const obj = {};
    for(let i = 0; i < arguments.length; i++) {
        const value = arguments[i];
        if(!obj[value]) {
            obj[value] = 1;
        } else {
            obj[value]++;
        }
    }

    const arr = Object.entries(obj).map(([num, count]) => ([Number(num), count])).sort((a, b) => b[1] - a[1]);

    let answer = 0;
    if(arr.length === 1) {
        const p = arr[0][0];
        answer = 1111 * p;
    } else if (arr.length === 2) {
        const [p, pCount] = arr[0];
        const [q, qCount] = arr[1];

        if(pCount === qCount) {
            // 2개씩 같은 케이스
            answer = (p + q) * Math.abs(p - q);
        } else {
            // 3개가 같고 1개가 다른 케이스
            answer = Math.pow(10 * p + q, 2);
        }
    } else if (arr.length === 3) {
        const q = arr[1][0];
        const r = arr[2][0];
        // 2개가 같고, 나머지 2개는 각각 다른 케이스
        answer = q * r;
    } else if (arr.length === 4) {
        // 4개가 모두 다른 케이스
        answer = Math.min(...arr.map(v => v[0]));
    }

    return answer;
}

solution(a, b, c, d);