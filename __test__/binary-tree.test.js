'use strict';

const sumOfOdd = require('../challenges/tree/binary-search-tree');

describe('Find Maximum Binary Tree Module', ()=>{
  let tree2 = null;
  beforeAll(()=>{
    let node1 = new sumOfOdd.Node(2);
    let node2 = new sumOfOdd.Node(7);
    let node3 = new sumOfOdd.Node(5);
    let node4 = new sumOfOdd.Node(2);
    let node5 = new sumOfOdd.Node(6);
    let node6 = new sumOfOdd.Node(9);
    let node7 = new sumOfOdd.Node(5);
    let node8 = new sumOfOdd.Node(11);
    let node9 = new sumOfOdd.Node(4);

    node1.left = node2;
    node1.right = node3;
    node2.left = node4;
    node2.right = node5;
    node5.left = node7;
    node5.right = node8;
    node3.right = node6;
    node6.left = node9;

    tree2 = new sumOfOdd.BinaryTreeSumOdd(node1);
  });
  it('it should return the maximum value stored in the tree (11)', ()=>{
    expect(tree2.sumOfOddNumber()).toEqual(37);
  });
});