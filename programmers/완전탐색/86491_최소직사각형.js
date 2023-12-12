// 최소직사각형
// https://school.programmers.co.kr/learn/courses/30/lessons/86491

const sizes = [[60, 50], [30, 70], [60, 30], [80, 40]];
const result = 4000;

function solution(sizes) {
    const data = sizes.map(v => v.sort((a,b) => b-a));

    let widths = [];
    let heights = [];
    for(let i = 0; i < data.length; i++) {
        const [w, h] = data[i];
        widths.push(w);
        heights.push(h);
    }

    return Math.max(...widths) * Math.max(...heights);
}

console.log(solution(sizes));