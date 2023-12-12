// 성격 유형 검사
// https://school.programmers.co.kr/learn/courses/30/lessons/118666

const survey = ["AN", "CF", "MJ", "RT", "NA"];
const choices = [5, 3, 2, 7, 5];
const result = "TCMA";

// 1번 지표	라이언형(R), 튜브형(T)
// 2번 지표	콘형(C), 프로도형(F)
// 3번 지표	제이지형(J), 무지형(M)
// 4번 지표	어피치형(A), 네오형(N)

// AN, 5면, N 1점
// NA, 5면, A 1점

function solution(survey, choices) {
    const obj = {
        'R': 0,
        'T': 0,
        'C': 0,
        'F': 0,
        'J': 0,
        'M': 0,
        'A': 0,
        'N': 0,
    }

    survey.forEach((v, i) => {
        const score = choices[i] - 4;
        let type = v.split('')[score < 0 ? 0 : 1];
        obj[type] += Math.abs(score);
    })


    console.log(obj);
    
    let answer = `${obj['R'] >= obj['T'] ? 'R' : 'T'}`;
    answer += `${obj['C'] >= obj['F'] ? 'C' : 'F'}`;
    answer += `${obj['J'] >= obj['M'] ? 'J' : 'M'}`;
    answer += `${obj['A'] >= obj['N'] ? 'A' : 'N'}`;

    return answer;
}

console.log(solution(survey, choices));