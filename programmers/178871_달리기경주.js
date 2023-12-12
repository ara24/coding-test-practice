// 달리기 경주
// https://school.programmers.co.kr/learn/courses/30/lessons/178871

var players = ["mumu", "soe", "poe", "kai", "mine"];
var callings = ["kai", "kai", "mine", "mine"];

var result = ["mumu", "kai", "mine", "soe", "poe"];

// ---



function solution(players, callings) {
    const hash = new Map();
    players.forEach((name, index) => {
        hash.set(name, index);
    });

    callings.forEach((name) => {
        const curIdx = hash.get(name);
        const front = players[curIdx - 1];

        [players[curIdx], players[curIdx - 1]] = [players[curIdx - 1], players[curIdx]];

        hash.set(name, curIdx - 1);
        hash.set(front, curIdx);
    })

    return players;
}

const answer = solution(players, callings);
console.log(answer);

// const test = answer.every((v,i) => {
//     return v === result[i]
// });

// console.log(test ? '정답입니다!' : '틀렸습니다!');