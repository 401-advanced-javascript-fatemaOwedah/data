'use strict';
const linkList = {};
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insert(value) {
        if (value) {
            let node = new Node(value);
            if (!this.head) {
                this.head = node;
                return this;
            }
            let newNode = this.head;
            this.head = node;
            this.head.next = newNode;
            return this;
        }
    }
    kthFromEnd(k) {
        let allNodes = [];
        allNodes[0] = this.head;
        let current = this.head;
        let i = 1;
        while (current.next) {
            current = current.next;
            allNodes[i] = current;
            i++;
        }
        if (k > allNodes.length) {
            return 'Exception';
        } else if (k <= 0) {
            return 'Exception';
        } else if (typeof (k) != 'number') {
            return 'Exception';
        } else {
            return allNodes[allNodes.length - k].value;
        }
    }
}

const linkedListInstance = new LinkedList();
linkedListInstance.insert(7);
linkedListInstance.insert(5);
linkedListInstance.insert(20);
linkedListInstance.insert(15);
console.log(linkedListInstance.kthFromEnd(3));

linkList.Node = Node;
linkList.LinkedList = LinkedList;
module.exports = linkList;