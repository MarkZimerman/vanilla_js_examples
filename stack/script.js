// Private field:
const _items = new WeakMap();

class Stack {

    constructor() {
        _items.set(this, []);
    }

    size = 0;

    // Public method
    push(item) {
        _items.get(this).push(item);
        this.size++;
    }

    // Public method
    pop() {
        if (_items.get(this).length === 0) {
            throw new Error("Stack is empty");
        }
        return _items.get(this).pop();
    }

    // Public method
    peek() {
        if (this.size == 0) {
            throw new Error("Stack is empty");
        }
        return this.container[this.size - 1];
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);