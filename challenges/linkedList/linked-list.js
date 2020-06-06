'use strict';

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
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
  }
  includes(value) {
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    if (currentNode.value === value) {
      return true;
    }
    return false;
  }
  toString() {
    let currentNode = this.head;
    let string = '{' + currentNode.value + '} -> ';
    while (currentNode.next) {
      currentNode = currentNode.next;
      string = string + '{' + currentNode.value + '} -> ';
    }
    string = string + 'NULL';
    return string;
  }
}
class LinkedListAdd extends LinkedList {
  append(val) {
    let currentNode = this.head;
    let node = new Node(val);
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  insertBefore(value, newVal) {
    let currentNode = this.head;
    let node = new Node(newVal);
    let prev;
    if(!this.includes(value)){
      return 'Exception';
    }
    while (currentNode) {
      if (currentNode.value === value) {
        let node = new Node(newVal);
        node.next = currentNode;
        prev.next = node;
        console.log(prev);
        return this;
      }
      prev = currentNode;
      currentNode = currentNode.next;
    }
  }
  insertAfter(value, newVal){
    let currentNode = this.head;
    if(!this.includes(value)){
      return 'Exception';
    }
    while(currentNode){
      if(value === currentNode.value){
        let node = new Node(newVal);
        node.next = currentNode.next;
        currentNode.next = node;
        console.log(currentNode);
        return this;
      }
      currentNode = currentNode.next;
    }
  }
}

module.exports = {
  LinkedList: LinkedList,
  LinkedListAdd: LinkedListAdd,
};

