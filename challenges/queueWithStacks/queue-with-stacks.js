'use strict';

class PseudoQueue {
  constructor() {

    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value) {
    return this.stack1.push(value);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw 'This node is null';
    }

    if (!this.stack1.length) {
      if (!this.stack2.length) {
        return null;
      }
    }
    if (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.stack1.length > 0) return this.stack1[0];
    return this.stack2[this.stack2.length - 1];
  }

  isEmpty() {
    return !this.stack1[0];
  }

}
module.exports = PseudoQueue;