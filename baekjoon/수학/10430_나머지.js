// 나머지
// https://www.acmicpc.net/problem/10430

// output
// 1
// 1
// 0
// 0

var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var input = fs.readFileSync('./10430_input.txt').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);

console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b % c));
console.log(((a % c) * (b % c)) % c);