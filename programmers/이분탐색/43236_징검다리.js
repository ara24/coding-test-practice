// 징검다리
// https://school.programmers.co.kr/learn/courses/30/lessons/43236

const distance = 25;
const rocks = [2, 14, 11, 21, 17];
const n = 2;
const _result = 4;

function solution(distance, rocks, n) {
  let answer = 0;
  let min = 1;
  let max = distance;
  const _rocks = rocks.sort((a, b) => a - b);

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    let prev = 0;
    let remove = 0;

    for (let i = 0; i < _rocks.length; i++) {
      if (_rocks[i] - prev <= mid) {
        // 거리가 mid 보다 작으면 돌 제거
        remove++;
      } else {
        prev = _rocks[i];
      }
    }

    if (remove > n) {
      // 우측 범위에 답이 있음
      max = mid - 1;
    } else {
      // 좌측 범위에 답이 있음. 좌측 범위중에 제일 큰 수가 최대값.
      min = mid + 1;
      answer = Math.max(answer, min);
    }
  }

  return answer;
}

console.log(solution(distance, rocks, n));
