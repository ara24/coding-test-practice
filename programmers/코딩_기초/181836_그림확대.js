// 그림 확대
// https://school.programmers.co.kr/learn/courses/30/lessons/181836

const picture = [".xx...xx.", "x..x.x..x", "x...x...x", ".x.....x.", "..x...x..", "...x.x...", "....x...."];
const k = 2;

// function solution(picture, k) {
//     const repeat2Picture = [];
//     // column 두 배
//     for(let i = 0; i < picture.length; i++) {
//         let str = '';
//             for(let j = 0; j < picture[i].length; j++) {
//                 str += picture[i][j].repeat(k);
//             }
//             repeat2Picture.push(str);
//     }

//     const answer = [];
//     // row 두 배
//     for(let i = 0; i < picture.length * k; i++) {
//         if(i % k === 0) {
//             answer.push(repeat2Picture[i / k]);
//         } else {
//             answer.push(answer[i - 1]);
//         }
//     }

//     return answer;
// }

function solution(picture, k) {
    const answer = [];

    picture.forEach(v => {
        const expanded = [...v].reduce((acc,cur) => {
            return acc + cur.repeat(k);
        }, '');

        for(let i = 0; i < k; i++) {
            answer.push(expanded);
        }
    })

    return answer;
}

console.log(solution(picture, k));