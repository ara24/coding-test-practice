// 길 찾기 게임 (tree 만들기)
// https://school.programmers.co.kr/learn/courses/30/lessons/42892

const nodeinfo = [[5,3],[11,5],[13,3],[3,5],[6,1],[1,3],[8,6],[7,2],[2,2]];

// class BinaryTree {
//     constructor(value, x_pos) {
//         // 첫 노드(root)
//         this.value = value;
//         this.x_pos = x_pos;
//         this.left = null;
//         this.right = null;
//     }

//     // 왼쪽 노드나 오른쪽 노드로 보내기
//     insert(value, x_pos) {
//         x_pos <= this.x_pos ? this._toLeft(value, x_pos) : this._toRight(value, x_pos);
//     }

//     // 왼쪽 자식이 있으면 insert로 보냄
//     // 왼쪽 자식이 없으면 왼쪽 노드 생성
//     _toLeft(value, x_pos) {
//         this.left ? this.left.insert(value, x_pos) : this.left = new BinaryTree(value, x_pos);
//     }

//     _toRight(value, x_pos) {
//         this.right ? this.right.insert(value, x_pos) : this.right = new BinaryTree(value, x_pos);
//     }
// }

// function solution(nodeinfo) {
//     // y가 큰 값이면 부모, 작은 값이면 자식 노드
//     const nodes = nodeinfo.map((node, idx) => [idx + 1, node[0], node[1]]).sort((a,b) => b[2] - a[2]);

//     console.log(nodes);

//     // 첫 번째 원소를 넣어서 생성
//     const bTree = new BinaryTree(nodes[0][0], nodes[0][1]);

//     for(let i = 1; i < nodes.length; i++) {
//         bTree.insert(nodes[i][0], nodes[i][1]);
//     }

//     console.log(bTree);

//     // 전위 순회(root -> left -> right)
//     const preorder = (bTree, arr) => {
//         if(bTree !== null) {
//             arr.push(bTree.value);

//             preorder(bTree.left, arr);
//             preorder(bTree.right, arr);
//         }
//     }

//     // 후위 순회(left -> right -> root)
//     const postorder = (bTree, arr) => {
//         if(bTree !== null) {
//             postorder(bTree.left, arr);
//             postorder(bTree.right, arr);

//             arr.push(bTree.value);
//         }
//     }

//     const inorder = (bTree, arr) => {
//         if(bTree !== null) {
//             inorder(bTree.left, arr);
//             arr.push(bTree.value);
//             inorder(bTree.right, arr);
//         }
//     }


//     const preorderArr = [];
//     const postorderArr = [];

//     preorder(bTree, preorderArr);
//     postorder(bTree, postorderArr);

//     return [preorderArr, postorderArr];
// }

class BinaryTree{
    constructor(value, x_pos) {
        this.value = value;
        this.x_pos = x_pos;
        this.left = null;
        this.right = null;
    }

    insert(value, x_pos) {
        // x_pos === this.x_pos 
        x_pos <= this.x_pos ? this._toLeft(value, x_pos) : this._toRight(value, x_pos);
    }

    // 왼쪽 노드가 있으면 자식으로 보내기
    // 왼쪽 노드가 없으면 binaryTree 추가
    _toLeft(value, x_pos) {
        this.left ? this.left.insert(value, x_pos) : this.left = new BinaryTree(value, x_pos);
    }

    _toRight(value, x_pos) {
        this.right ? this.right.insert(value, x_pos) : this.right = new BinaryTree(value, x_pos);
    }
}

function solution(nodeinfo) {
    // 번호 붙이기, y가 큰 것 부터 정렬(y 내림차수)
    const nodes = nodeinfo.map((node, idx) => [idx + 1, node[0], node[1]])
    .sort((a,b) => b[2] - a[2]);

    const bTree = new BinaryTree(nodes[0][0], nodes[0][1]);

    for(let i = 1; i < nodes.length; i++) {
        bTree.insert(nodes[i][0], nodes[i][1]);
    }
    console.log(bTree);

    const preorderArr = [];
    const postoderArr = [];

    // 전위 순회 (root -> left -> right)
    const preorder = (bTree, arr) => {
        if(bTree !== null) {
            arr.push(bTree.value);

            preorder(bTree.left, arr);
            preorder(bTree.right, arr);
        }
    }

    // 후위 순회 (left -> right -> root)
    const postoder = (bTree, arr) => {
        if(bTree !== null) {
            postoder(bTree.left, arr);
            postoder(bTree.right, arr);

            arr.push(bTree.value);
        }
    }

    preorder(bTree, preorderArr);
    postoder(bTree, postoderArr);

    return [preorderArr, postoderArr];
}

console.log(solution(nodeinfo));