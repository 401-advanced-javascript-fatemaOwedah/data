'use strict';

const findMaximumValue = require('../challenges/tree/binary-search-tree');

describe('Find Maximum Binary Tree Module', ()=>{
  let tree2 = null;
  let tree3 = null;
  beforeAll(()=>{
    let node1 = new findMaximumValue.Node(2);
    let node2 = new findMaximumValue.Node(7);
    let node3 = new findMaximumValue.Node(5);
    let node4 = new findMaximumValue.Node(2);
    let node5 = new findMaximumValue.Node(6);
    let node6 = new findMaximumValue.Node(9);
    let node7 = new findMaximumValue.Node(5);
    let node8 = new findMaximumValue.Node(11);
    let node9 = new findMaximumValue.Node(4);

    node1.left = node2;
    node1.right = node3;
    node2.left = node4;
    node2.right = node5;
    node5.left = node7;
    node5.right = node8;
    node3.right = node6;
    node6.left = node9;

    tree2 = new findMaximumValue.BinaryTreeMaxValue(node1);
    tree3 = new findMaximumValue.BinaryTreeMaxValue(node3);
  });
  it('it should return the maximum value stored in the tree1 (9)', ()=>{
    console.log(tree3.findMaximumValue());
    expect(tree3.findMaximumValue()).toEqual(9);
  });
  it('it should return the maximum value stored in the tree (11)', ()=>{
    console.log(tree2.findMaximumValue());
    expect(tree2.findMaximumValue()).toEqual(11);
  });
});