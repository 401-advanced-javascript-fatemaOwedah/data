'use strict';
const {BinarySearchTree, BinaryTree, Node, Queue} = require('../challenges/tree/binary-search-tree');


describe(`tree traversal`, () => {
      
  it('Can successfully instantiate an empty tree', () => {
    const tree = new BinarySearchTree();
    expect(tree.root).toBe(null);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    const tree = new BinarySearchTree(10);
    expect(tree.root.value).toBe(10);
  });

  it('Can successfully print the values in a breadth first fashion', () => {
    const tree = new BinarySearchTree(null);
    tree.add(10);
    tree.add(5);
    tree.add(2);
    tree.add(7);
    tree.add(15);
    tree.add(12);
    console.log('this is the test log', tree.breadthFirstTraversal(tree.root)[0]);
    expect(tree.breadthFirstTraversal(tree.root)[0]).toBe(10);
    expect(tree.breadthFirstTraversal(tree.root)[1]).toBe(5);
    expect(tree.breadthFirstTraversal(tree.root)[2]).toBe(15);
    expect(tree.breadthFirstTraversal(tree.root)[3]).toBe(2);
    expect(tree.breadthFirstTraversal(tree.root)[4]).toBe(7);
    expect(tree.breadthFirstTraversal(tree.root)[5]).toBe(12);
  });

  it('Can successfully print the values in a breadth first fashion with different numbers', () => {
    const tree = new BinarySearchTree(null);
    tree.add(11);
    tree.add(6);
    tree.add(3);
    tree.add(8);
    tree.add(16);
    tree.add(13);
    console.log('this is the test log', tree.breadthFirstTraversal(tree.root)[0]);
    expect(tree.breadthFirstTraversal(tree.root)[0]).toBe(11);
    expect(tree.breadthFirstTraversal(tree.root)[1]).toBe(6);
    expect(tree.breadthFirstTraversal(tree.root)[2]).toBe(16);
    expect(tree.breadthFirstTraversal(tree.root)[3]).toBe(3);
    expect(tree.breadthFirstTraversal(tree.root)[4]).toBe(8);
    expect(tree.breadthFirstTraversal(tree.root)[5]).toBe(13);
  });
});