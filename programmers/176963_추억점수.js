// 추억 점수
// https://school.programmers.co.kr/learn/courses/30/lessons/176963

const name = ["may", "kein", "kain", "radi"];
const yearning = [5, 10, 1, 3];
const photo = [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]];
const result = [19, 15, 6];

function solution(name, yearning, photo) {
    const obj = {};
    name.forEach((value, index) => {
        obj[value] = yearning[index];
    });

    return photo.map((names) => {
        return names.reduce((acc, cur) => {
            score = obj[cur] || 0;
            console.log(acc, score);
            return acc + score;
        }, 0);
    })
}

const answer = solution(name, yearning, photo);
console.log(answer);
