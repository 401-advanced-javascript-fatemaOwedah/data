'use strict';
class Node {
  constructor(val, right = null, left = null){
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
class BinaryTreeSumOdd {
  constructor(root = null){
    this.root = root;
  }
  sumOfOddNumber(){
    let storage = [];
    let _walk = (node)=>{
      storage.push(node.val);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    let sum = 0;
    for (let i = 0; i < storage.length; i++) {
      if(storage[i]%2==1) {
        sum = sum + storage[i];
      }
    } 
    return sum;
  }
}
module.exports = {BinaryTreeSumOdd,Node};