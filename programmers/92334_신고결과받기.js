// 신고 결과 받기
// https://school.programmers.co.kr/learn/courses/30/lessons/92334

const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"];
const k = 2;
const result = [2,1,1,0];

// const id_list = ["con", "ryan"];
// const report = ["ryan con", "ryan con", "ryan con", "ryan con"];
// const k = 3;
// const result = [0,0];

// 신고 결과 받기

// 한 유저를 여러번 신고한 경우, 1회로 간주 (중복 제거) --- report를 Set으로 정리
// id_list를 object로 정리, id를 key로 하고, 신고한 사람을 배열로 정리해서 넣기, 신고를 2번 이상 받은 사람만 남기기 --- idObj 만들기
// 신고를 2번 이상 받은 사람 찾기 --- a 배열에 담기
// id 순회, reportObj 순회해서 블랙리스트에 포함되어있으면 count 올리기

// function solution(id_list, report, k) {
//     // 중복 제거
//     const set = new Set(report);

//     // obj로 정리
//     const reportObj = {};
//     const pickObj = {};
//     id_list.forEach(id => {
//         reportObj[id] = [];
//         pickObj[id] = 0;
//     });

//     [...set].forEach(v => {
//         const [id, reportee] = v.split(' ');
//         reportObj[id].push(reportee);
//         pickObj[reportee] += 1;
//     });

//     const blackList = [];


//     console.log(reportObj);
//     console.log(pickObj);

//     // 차단할 id
//     for(let key in pickObj) {
//         const value = pickObj[key];
//         if(value >= k) {
//             blackList.push(key);
//         }
//     }

//     console.log('blackList', blackList);

//     // 블랙리스트가 없으면 0 채워서 리턴
//     if(!blackList.length) {
//         return id_list.map(v => 0);
//     }

//     const answer = id_list.map((id) => {
//         const reportIds = reportObj[id];
//         let reportCount = 0;

//         reportIds.forEach((reportedId) => {
//             if(blackList.includes(reportedId)) {
//                 reportCount += 1;
//             }
//         })

//         return reportCount;
//     })

//     return answer;
// }

function solution(id_list, report, k) {
    let reports = [...new Set(report)].map(v => v.split(' '));
    let counts = new Map();
    for(const bad of reports) {
        counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
    } 

    let good = new Map();
    for(const report of reports) {
        if(counts.get(report[1]) >= k) {
            good.set(report[0], good.get(report[0]) + 1 || 1);
        }
    }

    // console.log(reports);
    // console.log(counts);
    // console.log(good);

    return id_list.map(id => good.get(id) || 0);
}

console.log(solution(id_list, report, k));