'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
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

function  FizzBuzzTree(tree){

  let _walk = (node) => {
      
    if( node.value % 3 === 0 && node.value % 5 === 0 ) node.value = 'FizzBuzz';
    if( node.value % 5 === 0 ) node.value = 'Buzz' ;
    if( node.value % 3 === 0 )  node.value = 'Fizz' ;
    else(node.value) = `${node.value}`;
  
    if(node.left) _walk(node.left);
    if(node.right) _walk(node.right);
  };
    
  _walk(tree.root);
  return tree;
}

module.exports = {
  BinaryTree,
  Node,
  FizzBuzzTree,
};