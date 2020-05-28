'use strict';
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    insert(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            return this;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
    }
    includes(val) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.val === val) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }
    toString() {
        let currentNode = this.head;
        let str = `{${currentNode.val}} ->`;
        while (currentNode.next) {
            currentNode = currentNode.next;
            str = str + ` {${currentNode.val}} ->`;
        }
        str = str + ` NULL`
        return str;
    }
}
module.exports = LinkedList;