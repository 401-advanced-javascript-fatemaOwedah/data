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
    append(value) {
        let node = new Node(value);
        let current = this.head;
        if (!current) {
            this.head = node;
            return this;
        }
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
    insertBefore(value, newVal) {
        let current = this.head;
        let newNode = new Node(newVal);
        let prevNode = null;
        while (current) {
            if (current.val === value) {
                if (prevNode === null) {
                    this.head = newNode;
                } else {
                    prevNode.next = newNode;
                }
                newNode.next = current;
            }
            prevNode = current;
            current = current.next;
        }
    }
    insertAfter(value, newVal) {
        let newNode = new Node(newVal);
        let current = this.head;
        while (current) {
            if (current.val === value) {
                let valueNum = newNode.next;
                current.next = newNode;
                newNode.next = valueNum;
            }
            current = current.next;
        }
    }
}
module.exports = LinkedList;