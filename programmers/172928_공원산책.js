// 공원 산책
// https://school.programmers.co.kr/learn/courses/30/lessons/172928

// const park = ["SOO","OXX","OOO"];
const park = ["OSO","OOO","OXO","OOO"];
// const routes = ["E 2","S 2","W 1"];
const routes = ["E 2","S 3","W 1"];

function getStartPositon(map) {
    let w = -1;
    let h = -1;
    outerLoof: for(let i = 0; i < map.length; i++) {
        for(let j = 0; j < map[0].length; j++) {
            if(map[i][j] === 'S') {
                w = j;
                h = i;
                break outerLoof;
            }
        }
    }

    return {w, h};
}

// function moveRobotDog(map, route, w, h) {
//     const op = route.match(/[ESWN]/i)[0];
//     const n = route.match(/\d+/)[0];
    
//     let _w = w;
//     let _h = h;
//     for(let i = 0; i < n; i++) {
//         if(op === 'E') {
//             _w += 1;
//         } else if (op === 'S') {
//             _h += 1;
//         } else if (op === 'W') {
//             _w -= 1;
//         } else if (op === 'N') {
//             _h -= 1;
//         }

//         const isOutOfMap = _w < 0 || _w >= map[0].length || _h < 0 || _h >= map.length;
//         if(isOutOfMap) {
//             return {w, h};
//         }
//         const isObstacle = map[_h][_w] === 'X';
//         if(isObstacle) {
//             return {w, h}
//         }
//     }

//     return {w: _w, h: _h};
// }

function moveRobotDog(map, route, w, h) {
    const operObj = {
        'E': [0, 1],
        'W': [0 , -1],
        'S': [1, 0],
        'N': [-1, 0]
    };
    const op = route.match(/[ESWN]/i)[0];
    const n = route.match(/\d+/)[0];

    let _w = w;
    let _h = h;
    for(let i = 0; i < n; i++) {
        _w += operObj[op][0];
        _h += operObj[op][1];

        const isOutOfMap = _w < 0 || _w >= map[0].length || _h < 0 || _h >= map.length;
        if(isOutOfMap) {
            return {w, h};
        }
        const isObstacle = map[_h][_w] === 'X';
        if(isObstacle) {
            return {w, h}
        }
    }

    return {w: _w, h: _h};
}


function solution(park, routes) {
    const _park = park.map((value) => {
        return Array.from(value);
    });

    let {w, h} = getStartPositon(_park);

    routes.forEach((route) => {
        ({w, h} = moveRobotDog(_park, route, w, h));
    })

    const answer = [h, w];
    return answer;
}

console.log(solution(park, routes));