// 햄버거 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/133502

const ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];
const result = 2;

function solution(ingredient) {
    let arr = [];
    let arrIndex = 0;
    let count = 0;

    if(ingredient.length < 4) {
        return count;
    }

    for(let i = 0; i < ingredient.length; i++) {
        arr[arrIndex] = ingredient[i];

        if(arr.length >= 4) {
            const isWrapping = (arr[arrIndex - 3] === 1) && (arr[arrIndex - 2] === 2) && (arr[arrIndex - 1] === 3) && (arr[arrIndex] === 1);
            if(isWrapping) {
                count++;
                arrIndex = arrIndex - 4;
            }
        }
        
        arrIndex++;
    }

    return count;
}

console.log(solution(ingredient));