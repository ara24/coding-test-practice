// 디스크 컨트롤러 (Heap)
// https://school.programmers.co.kr/learn/courses/30/lessons/42627

// 풀이 (다시 풀어보기)
// https://jjnooys.medium.com/javascript-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%94%94%EC%8A%A4%ED%81%AC-%EC%BB%A8%ED%8A%B8%EB%A1%A4%EB%9F%AC-c68e73daf7dd

const jobs = [[0, 3], [1, 9], [2, 6]];
const _return = 9;

/*
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

    isFirstArgumentSmaller(parent, child) {
        const parentDuration = parent[1];
        const childDuration = child[1];

        // 처리 시간이 같은 경우, 처리를 요청한 시간이 빠른게 더 먼저 처리
        if(parentDuration === childDuration) {
            return parent[0] < child[0];
        }

        return parentDuration < childDuration;
    }

    // 힙에 값을 push 하면서 힙 정렬 (time - start + ing 값이 제일 작은 것부터 정렬)
    push(value) {
        this.heap.push(value);
        let index = this.heap.length - 1;

        while(index > 0 && this.isFirstArgumentSmaller(this.heap[index], this.heap[Math.floor((index - 1) / 2)])) {
            // 자식 노드 값이 부모 노드 값 보다 작으면, 부모-자식 노드 위치 바꾸기
            const temp = this.heap[index];
            this.heap[index] = this.heap[Math.floor((index - 1) / 2)];
            this.heap[Math.floor((index - 1) / 2)] = temp;
            // index 갱신
            index = Math.floor((index - 1) / 2);
        }
    }

    // 반으로 뚝 잘라서 자식 검사 (time - start + ing 값이 제일 작은 것부터 정렬)
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
            let minChildIndex = (index * 2 + 2 < this.heap.length && this.isFirstArgumentSmaller(this.heap[index * 2 + 2], this.heap[index * 2 + 1]))
            ? index * 2 + 2 : index * 2 + 1; // 오른쪽 : 왼쪽

            if(this.isFirstArgumentSmaller(this.heap[index], this.heap[minChildIndex])) {
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

function solution(jobs) {
    let time = -1;
    let totalProcessingTime = 0;

    // 힙에 넣기
    const minHeap = new MinHeap();

    // 요청순으로 오름차순
    jobs.sort((a,b) => a[0] < b[0]).forEach(v => {
        minHeap.push(v);
    });

    // 힙에서 하나씩 꺼내서 실행
    while(minHeap.getLength() > 0) {
        const [start, ing] = minHeap.pop();

        if(time === -1 || time < start) {
            time = start;
        }

        totalProcessingTime += time + ing - start;
        time += ing;

    }

    // let complete = 0;
    // while(minHeap.getLength() > 0) {

    //     if(time >= complete) {
    //         const [start, ing] = minHeap.pop();
    //         complete = time + ing;
    //         totalProcessingTime += complete - start;
    //     }
        
    //     time++;
    // }

    return Math.floor(totalProcessingTime / jobs.length);
} */

class MinHeap {
    constructor() {
        this.heap = [];
    }

    get length() {
        return this.heap.length;
    }

    getParent(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChild(index) {
        return index * 2 + 1;
    }

    getRightChild(index) {
        return index * 2 + 2;
    }
    
    swap(a,b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    push(value) {
        this.heap.push(value);
        let index = this.length - 1;
        let parIndex = Math.floor((index - 1) / 2);

        while(index > 0 && this.heap[index][1] < this.heap[parIndex][1]) {
            this.swap(index, parIndex);
            index = parIndex;
        }
    }

    pop() {
        if(this.heap.length === 0) {
            return null;
        }
        if(this.heap.length === 1) {
            return this.heap.pop();
        }

        this.swap(0, this.heap.length - 1);
        const min = this.heap.pop();

        let index = 0;
        let leftChildIndex = index * 2 + 1;
        let rightChildIndex = index * 2 + 2;

        if(index > Math.floor(this.length / 2) - 1) return min;

        const swapChildrenIndex = this.heap[rightChildIndex] && this.heap[rightChildIndex][1] < this.heap[leftChildIndex][1] ? rightChildIndex : leftChildIndex;
        console.log('this.heap', this.heap);
        console.log('swapChildrenIndex', swapChildrenIndex);
        console.log('this.heap[swapChildrenIndex]', this.heap[swapChildrenIndex]);
        if(this.heap[swapChildrenIndex][1] < this.heap[index][1]) {
            this.swap(swapChildrenIndex, index);
        }

        return min;

    }
}

function solution(jobs) {
    const heap = new MinHeap();

    const length = jobs.length;
    let answer = 0;
    let time = 0;

    jobs = jobs.sort((a,b) => a[0] < b[0]).map((v, i, arr) => [v[0] - arr[0][0], v[1]]);

    while(jobs.length || heap.length) {
        while(jobs.length > 1 || jobs[0][0] <= time) {
            heap.push(jobs.shift());
        }

        if(!heap.length) {
            const newTime = jobs[0][0];
            while(jobs.length || jobs[0][0] === newTime) {
                heap.push(jobs.shift);
            }

            time = newTime;
        }

        const done = heap.pop();

        time += done[1];
        answer += time - done[0];
    }

    return Math.floor(answer / length);

}

console.log(solution(jobs));