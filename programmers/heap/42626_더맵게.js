// 더 맵게 (Heap 정렬)
// https://school.programmers.co.kr/learn/courses/30/lessons/42626

const scoville = [1, 2, 3, 9, 10, 12];
// const scoville = [];
// const scoville = [1];
// const scoville = [1,2];
// const scoville = [1,3];
const K = 7;
const _return = 2;

// heap 구조 만들기
// * push 하고나서 index 맨 뒤부터 중간까지 힙 정렬
// * pop 하고나서 맨 뒤의 값을 꺼내서 index 0에 넣고 index 0 부터 중간까지 힙 정렬

class MinHeap {
    constructor() {
        this.heap = [];
    }

    getLength() {
        return this.heap.length;
    }

    getMin() {
        return this.heap[0];
    }

    // 힙에 값을 push 하면서 힙 정렬
    push(value) {
        this.heap.push(value);
        let index = this.heap.length - 1;

        while(index > 0 && this.heap[index] < this.heap[Math.floor((index - 1) / 2)]) {
            // 자식 노드 값이 부모 노드 값 보다 작으면, 부모-자식 노드 위치 바꾸기
            const temp = this.heap[index];
            this.heap[index] = this.heap[Math.floor((index - 1) / 2)];
            this.heap[Math.floor((index - 1) / 2)] = temp;
            // index 갱신
            index = Math.floor((index - 1) / 2);
        }
    }

    // 반으로 뚝 잘라서 자식 검사
    pop() {
        if(this.heap.lenght === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();

        const minValue = this.heap[0]; // 맨 앞의(제일 작은) 수를 따로 담아 놓기
        this.heap[0] = this.heap.pop(); // 제일 큰 수를 root에 올리기(다시 정리하기 위해)
        let index = 0;

        // heap 정렬
        while(index * 2 + 1 < this.heap.length) {
            // 자식 오른쪽 노드 위치: index * 2 + 2, 왼쪽 노드 위치: index * 2 + 1

            // 마지막 노드가 오른쪽이고, 오른쪽 자식 노드가 더 작으면 오른쪽 노트 index 반환. 그 외에 왼쪽 index 반환.
            let minChildIndex = (index * 2 + 2 < this.heap.length && this.heap[index * 2 + 2] < this.heap[index * 2 + 1])
            ? index * 2 + 2 : index * 2 + 1; // 오른쪽 : 왼쪽

            if(this.heap[index] < this.heap[minChildIndex]) {
                // 자식이 부모보다 크면 할 것 없음.
                break;
            }

            // 자식이 부모보다 작으면 위치 변경
            const temp = this.heap[index];
            this.heap[index] = this.heap[minChildIndex];
            this.heap[minChildIndex] = temp;
            index = minChildIndex;
        }

        return minValue;
    }
}

function solution(scoville, K) {
    const minHeap = new MinHeap();
    let count = 0;

    scoville.forEach(v => {
        minHeap.push(v);
    })

    while(minHeap.getLength() >= 2 && minHeap.getMin() < K) {
        const min1 = minHeap.pop();
        const min2 = minHeap.pop();
        const mix = min1 + (min2 * 2);

        minHeap.push(mix);
        count++;
    }
    
    return minHeap.getMin() >= K ? count : -1;
}


console.log(solution(scoville, K));