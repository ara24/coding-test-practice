// 여행경로 (깊이 우선 탐색 dfs)
// https://school.programmers.co.kr/learn/courses/30/lessons/43164

// const tickets = [["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]];
// const _return = ["ICN", "JFK", "HND", "IAD"];

const tickets = [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]];
const _return = ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"];

// function solution(tickets) {
//     let answer = [];
//     const result = [];
//     const visited = [];

//     tickets.sort();

//     const length = tickets.length;

//     const dfs = (str, count) => {
//         result.push(str);

//         // 재귀 탈출
//         if(count === length) {
//             answer = result;
//             return true;
//         }

//         for(let i = 0; i < length; i++) {
//             // 방문 안했고, 도착지이면
//             if(!visited[i] && tickets[i][0] === str) {
//                 visited[i] = true;

//                 if(dfs(tickets[i][1], count + 1)) return true;

//                 // 방문 실패
//                 visited[i] = false;
//             }
            
//         }

//         // 방문 취소
//         result.pop();

//         return false;
//     }

//     dfs('ICN', 0);

//     console.log(answer);
//     return answer;
// }

// function solution(tickets) {
//     const _tickets = tickets.sort();
//     const length = tickets.length;

//     console.log(_tickets);

//     const result = [];
//     const visited = [];

//     // dfs에 출발지와 카운트 넣기
//     // count가 length와 같으면 탈출
//     // 반복문으로 반복. 방문하지 않은 도착지이면 true(방문했음)으로 변경
//     const dfs = (str, count) => {
//         result.push(str);

//         if(count === length) {
//             answer = result;
//             return true;
//         }

//         for(let i = 0; i < length; i++) {
//             // 방문하지 않은 티켓이고, 티켓 출발지가 str 이면
//             if(!visited[i] && tickets[i][0] === str) {
//                 visited[i] = true;

//                 if(dfs(tickets[i][1], count + 1)) return true;
//                 // false가 나오는 경우(tickets[i][1]로 시작하는 티켓이 없는 경우)
//                 visited[i] = false;
//             }
//         }

//         result.pop(); // str과 일치하는 출발지가 없는 경우
//         return false;
//     }

//     dfs('INC', 0);

//     return answer;
// }

function solution(tickets) {
    let answer = [];
    const result = [];
    const visited = [];

    tickets.sort();

    const length = tickets.length;

    const dfs = (str, count) => {
        result.push(str);

        if(count === length) {
            answer = result;
            return true;
        }

        for(let i = 0; i < length; i++) {
            // 출발지가 일치하고, 방문 안했는지 확인
            if(!visited[i] && tickets[i][0] === str) {
                // 방문처리
                 visited[i] = true;

                 // 그 다음 것 방문
                 if(dfs(tickets[i][1], count + 1)) return true;

                 visited[i] = false; // 현재 노드 방문처리 취소
            }
        }

        // 마지막에 들어간 것 제거
        result.pop();
        return false;
    }


    // 시작점, step?
    dfs('ICN', 0);

    return answer;
}

console.log(solution(tickets));