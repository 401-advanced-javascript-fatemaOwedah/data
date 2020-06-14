'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  preOrder() { 
    let results = [];
    let _walk = (node) => {
      results.push(node.value);
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }

  inOrder() { 
    let results = [];
    let _walk = (node) => {
      if(node.left) _walk(node.left);
      results.push(node.value);
      if(node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }
  postOrder() {
    let results = [];
    let _walk = (node) => {
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
      results.push(node.value);
    };
    _walk(this.root);
    return results;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  add(value) {
    let nodeNew = new Node(value);
    if (!this.root) {
      this.root = nodeNew;
    } else {
      let current = this.root;

      while(current) {
        if (nodeNew.value < current.value){
          if (!current.left) {
            current.left = nodeNew;
            break;
          } else {
            current = current.left;
          }
        } else if (nodeNew.value > current.value) {
          if (!current.right) {
            current.right = nodeNew;
            break;
          } else {
            current = current.right;
          }
        } else {
          console.log('!!');
          break;
        }
      }
    }
  }

  contains (element, node) {
    let current = node;

    if (current.value === element) return true;

    if (current.value > element && current.left) {
      current = current.left;
      return this.contains(element, current);
    }

    if (current.value < element && current.right) {
      current = current.right;
      return this.contains(element, current);
    }

    if (!current.left && current.right) return false;
  }
}
module.exports = {
  Node: Node,
  BinaryTree: BinaryTree,
  BinarySearchTree: BinarySearchTree,
};