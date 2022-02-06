export class Stack {
    constructor() {
        this.array = [];
    }

    peek() {
        return this.array[this.array.length - 1];
    }

    push(value) {
        this.array.push(value);
        return this;
    }

    pop() {
        return this.array.pop();
    }

    isEmpty() {
        return this.array.length === 0;
    }
}