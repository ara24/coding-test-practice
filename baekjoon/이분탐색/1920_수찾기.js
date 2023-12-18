// 수 찾기
// https://www.acmicpc.net/problem/1920

// output
// 1
// 1
// 0
// 0
// 1

var fs = require("fs");
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var input = fs.readFileSync("./1920_input.txt").toString().split("\n");
var list = input[1].split(" ").sort((a, b) => a - b);
var target = input[3].split(" ");

// list에 target이 있으면 1, 없으면 0

function binarySearch(s, e, num) {
  if (s === e) {
    if (list[s] === num) return true;
    else return false;
  }

  const mid = Math.floor((s + e) / 2);
  if (list[mid] >= num) return binarySearch(s, mid, num);
  else return binarySearch(mid + 1, e, num);
}

const answer = [];
target.forEach((v) => {
  const result = binarySearch(0, list.length - 1, v) ? 1 : 0;
  answer.push(result);
});

console.log(answer.join("\n"));
