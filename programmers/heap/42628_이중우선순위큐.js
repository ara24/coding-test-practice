// 이중우선순위큐 (힙으로 풀지 않았음)
// https://school.programmers.co.kr/learn/courses/30/lessons/42628

// const operations = ["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"];
const operations = ["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"];
// const _return = [0,0];
const _return = [333,-45];

function solution(operations) {
    const queue = [];

    for(const op of operations) {
        const [str, data] = op.split(' ');
        
        if(str === 'I') {
            queue.push(Number(data));
            continue;
        }

        // str === 'D'
        if(data === '1') {
            const max = Math.max(...queue);
            const findIndex = queue.findIndex(v => v === max);
            queue.splice(findIndex, 1);
        } else if (data === '-1') {
            const min = Math.min(...queue);
            const findIndex = queue.findIndex(v => v === min);
            queue.splice(findIndex, 1);
        }
    }

    if(queue.length === 0) {
        return [0,0]
    }

    const max = Math.max(...queue);
    const min = Math.min(...queue);
    return [max, min];
}

console.log(solution(operations));

