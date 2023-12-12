// 신규 아이디 추천
// https://school.programmers.co.kr/learn/courses/30/lessons/72410

// 13:23 - 13:51 (28m)

// const new_id = "...!@BaT#*..y.abcdefghijklm";
// const result = "bat.y.abcdefghi";

// const new_id = "...";
// const result = "aaa";

const new_id = "123_.def";
const result = "123_.def";

// 대문자를 소문자로 변경
// 알파벳 소문자, 숫자, -, _, . 제외한 모든 문자 제거
// 마침표 여러개는 1개로 변경
// 마침표가 처음이나 끝에 있으면 제거
// new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
// new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
//      만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
// new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.

function solution(new_id) {
    let answer = new_id;

    // step1
    const step1Strs = new_id.match(/[A-Z]/g);
    if(step1Strs) {
        for (let str of step1Strs) {
            answer = answer.replace(str, str.toLowerCase());
        }
    }
    

    // step2
    answer = answer.replace(/[^a-z0-9-_.]/g, '');
    console.log(answer);

    // step3
    answer = answer.replace(/\.+/g, '.');

    // step4
    // answer = answer.replace(/^\.+/g, '');
    // answer = answer.replace(/\.+$/g, '');

    answer = answer.replace(/^\.|\.$/g, '');

    // step5
    if(!answer.length) {
        answer = 'a';
    }
    // replace(/^$/, "a")
    
    // step6
    if(answer.length >= 16) {
        answer = answer.slice(0, 15);
        answer = answer.replace(/\.+$/g, '');
    }
    
    // step7
    if(answer.length <= 2) {
        answer += answer[answer.length - 1].repeat(3 - answer.length);
    }
    // .replace(/^(.)$/, "$1$1$1")
    // .replace(/^(.)(.)$/, "$1$2$2");

    return answer;
}

console.log(solution(new_id));