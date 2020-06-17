'use strict';
class Node {
  constructor(val, right = null, left = null){
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
class BinaryTreeMaxValue {
  constructor(root = null){
    this.root = root;
  }
  findMaximumValue(){
    let storage = [];
    let _walk = (node)=>{
      storage.push(node.val);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    let maximum = 0;
    for (let i = 0; i < storage.length; i++) {
      if(storage[i] > maximum) maximum = storage[i];
    }
    return maximum;
  }
}
module.exports = {BinaryTreeMaxValue,Node};