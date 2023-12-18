// 입국심사
// https://school.programmers.co.kr/learn/courses/30/lessons/43238

// 최소값 구하기

const n = 6;
const times = [7, 10];
const _return = 28;

function solution(n, times) {
  const _times = times.sort((a, b) => a - b);
  let left = 1; // min
  let right = n * _times[_times.length - 1]; // max
  let answer = right;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log(left, right, mid);
    let count = _times.reduce((acc, cur) => {
      return acc + Math.floor(mid / cur);
    }, 0);

    if (count >= n) {
      // count가 n보다 크면 답은 좌측에 있음
      right = mid - 1;
      answer = Math.min(mid, answer); // 최솟값
    } else {
      // count가 n보다 작으면 답은 우측에 있음
      left = mid + 1;
    }
  }

  return answer;
}

console.log(solution(n, times));
