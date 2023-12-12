// 바탕화면 정리
// https://school.programmers.co.kr/learn/courses/30/lessons/161990

var wallpaper = [".#...", "..#..", "...#."];
// var wallpaper = ["..........", ".....#....", "......##..", "...##.....", "....#....."];
var result = [0, 1, 3, 4];
// var result = [1, 3, 5, 8];

function getFilePositon(wallpaper) {
    const sharpSize = wallpaper.flat().join('').replace(/\./g, '').length;
    let count = 0;
    const positions = [];

    outerLoof: for(let i = 0; i < wallpaper.length; i++) {
        for(let j = 0; j < wallpaper[0].length; j++) {
            if(wallpaper[i][j] === '#') {
                positions.push({x: j, y: i});
                count++;
                if(count === sharpSize) {
                    break outerLoof;
                }
            }
        }
    }

    return positions;
}

function getDragRange(positions) {
    let minX;
    let minY;
    let maxX;
    let maxY;

    positions.forEach(({x, y}, i) => {
        if(i === 0) {
            minX = maxX = x;
            minY = maxY = y;
        }

        minX = x < minX ? x : minX;
        maxX = x > maxX ? x : maxX;

        minY = y < minY ? y : minY;
        maxY = y > maxY ? y : maxY;
    });

    return [minY, minX, maxY + 1, maxX + 1];
}

function solution(wallpaper) {
    const _wallPaper = wallpaper.map((value) => Array.from(value));

    const positions = getFilePositon(_wallPaper);
    const answer = getDragRange(positions);
    return answer;
}

console.log('solution:', solution(wallpaper));