'use strict';

class Node {
  constructor(val, left = null, right = null){
    this.value = val;
    this.left = left;
    this.right = right;
  }
} 
class BinaryTree {
  constructor(root=null){
    this.root = root;
  }

  preOrder() {
    let results = [];

    let _walk = (node)=> {
      // 1. read TreeNode
      results.push(node.value);
      // 2. go Left
      if(node.left) _walk(node.left);
      // 3. go Right
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }
}
function tree_intersection (tree1, tree2) {
  
  let tree1Array = tree1.preOrder();
  let tree2Array = tree2.preOrder();

  let results = [];

  let j = 0;
      
  while (j < tree1Array.length) {
    for (let i = 0; i < tree2Array.length; i++) {
      if (tree1Array[j] === tree2Array[i]) {
        results.push(tree2Array[i]);
      }
    }
    j++;
  }
  return results;
}

// let firstNode1 = new Node(150);
// let secondNode1 = new Node(100);
// let thirdNode1 = new Node(250);
// let fourthNode1 = new Node(75);
// let fifthNode1 = new Node(160);
// let sixthNode1 = new Node(200);
// let seventhNode1 = new Node(350);
// let eigthNode1 = new Node (125);
// let ninthNode1 = new Node (175);
// let tenthNode1 = new Node (300);
// let eleventhNode1 = new Node (500);
        
// let firstNode2 = new Node(42);
// let secondNode2 = new Node(100);
// let thirdNode2 = new Node(600);
// let fourthNode2 = new Node(15);
// let fifthNode2 = new Node(160);
// let sixthNode2 = new Node(200);
// let seventhNode2 = new Node(350);
// let eigthNode2 = new Node(125);
// let ninthNode2 = new Node(175);
// let tenthNode2 = new Node(4);
// let eleventhNode2 = new Node(500);
    
    
// firstNode1.left = secondNode1;
// firstNode1.right = thirdNode1;
// secondNode1.left = fourthNode1;
// secondNode1.right = fifthNode1;
// thirdNode1.left = sixthNode1;
// thirdNode1.right = seventhNode1;
// fifthNode1.left = eigthNode1;
// fifthNode1.right = ninthNode1;
// seventhNode1.left = tenthNode1;
// seventhNode1.left = eleventhNode1;
    
// firstNode2.left = secondNode2;
// firstNode2.right = thirdNode2;
// secondNode2.left = fourthNode2;
// secondNode2.right = fifthNode2;
// thirdNode2.left = sixthNode2;
// thirdNode2.right = seventhNode2;
// fifthNode2.left = eigthNode2;
// fifthNode2.right = ninthNode2;
// seventhNode2.left = tenthNode2;
// seventhNode2.right = eleventhNode2;
    
    

// let tree1 = new BinaryTree(firstNode1);
// let tree2 = new BinaryTree(firstNode2);

// console.log(tree_intersection(tree1, tree2));
  
module.exports = {Node, BinaryTree, tree_intersection};