// 개인정보 수집 유효기간
// https://school.programmers.co.kr/learn/courses/30/lessons/150370

var today = '2022.05.19';
var terms = ["A 6", "B 12", "C 3"];
var privacies = ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"];
var result = [1, 3];

const calculateDate = (year, month, day) => year * 12 * 28 + month * 28 + day;

function getExpirationDates(privacies, terms) {
    const termsObj = {};
    terms.forEach(term => {
        const [type, period] = term.split(' ');
        termsObj[type] = Number(period);
    });

    const expirationDates = privacies.map(privacy => {
        const [date, type] = privacy.split(' ');
        let [year, month, day] = date.split('.').map(v => Number(v));

        return calculateDate(year, month + termsObj[type], day - 1);
    })

    return expirationDates;
}

function solution(today, terms, privacies) {
    const expirationDates = getExpirationDates(privacies, terms);

    const [tYear, tMonth, tDay] = today.split('.').map(v => Number(v));
    const answer = [];
    for(let i = 0; i < expirationDates.length; i++) {
        const dateSize = expirationDates[i];
        const todayDateSize = calculateDate(tYear, tMonth, tDay);

        if(dateSize < todayDateSize) {
            answer.push(i + 1);
        }
    }

    return answer;
}

console.log(solution(today, terms, privacies));