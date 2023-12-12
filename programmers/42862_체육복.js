// 체육복
// https://school.programmers.co.kr/learn/courses/30/lessons/42862

// 14:00 - 14:30


// 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.

const n = 5;
const lost = [4,2];
const reserve = [3,5];
const _result = 5;

function solution(n, lost, reserve) {
    const _lost = lost.filter(v => !reserve.includes(v)).sort((a,b) => a-b);
    const _reserve = reserve.filter(v => !lost.includes(v)).sort((a,b) => a-b);

    let answer = n - _lost.length;

    for(let people of _lost) {
        const prePeopleIndex = _reserve.indexOf(people - 1);
        if(prePeopleIndex > -1) {
            _reserve.splice(prePeopleIndex, 1);
            answer++;

            continue;
        }
        
        const nextPeopleIndex = _reserve.indexOf(people + 1);
        if(nextPeopleIndex > -1) {
            _reserve.splice(nextPeopleIndex, 1);
            answer++;
        }
        
    }

    return answer;
}

console.log(solution(n, lost, reserve));