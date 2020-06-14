'use strict';

let Tree = require('../challenges/tree/tree');

describe('Node Class: ', () => {
  it('Constructor Node', () => {
    let value = 1;
    let node = new Tree.Node(value);

    expect(node.value).toBe(value);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });
});

describe('BinaryTree Class', () => {

  let tree = null;

  beforeAll(() => {
    let one = new Tree.Node(1);
    let two = new Tree.Node(2);
    let three = new Tree.Node(3);
    let four = new Tree.Node(4);
    let five = new Tree.Node(5);
    let six = new Tree.Node(6);
    let seven = new Tree.Node(7);
    let eight = new Tree.Node(8);
    let nine = new Tree.Node(9);

    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    tree = new Tree.BinaryTree(one);


  });

  it('preOrder()', () => {
    let expected = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    let preOrder = tree.preOrder();
    expect(preOrder).toEqual(expected);
  });

  it('inOrder()', () => {
    let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    let inOrder = tree.inOrder();
    expect(inOrder).toEqual(expected);
  });

  it('postOrder()', () => {
    let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    let postOrder = tree.postOrder();
    expect(postOrder).toEqual(expected);
  });

});

describe('BinarySearchTree Class', () => {

  it('can successfully instantiate an empty tree', () => {
    let tree = new Tree.BinarySearchTree();
    expect(tree.contains.value).toBe(undefined);
  });

  it('can successfully instantiate a tree and add a single root node', () => {
    let tree = new Tree.BinarySearchTree();
    tree.add(10);
    expect(tree.contains(10, tree.root)).toBe(true);
  });

  it('can successfully add a left and right child to a single root node', () => {
    let tree = new Tree.BinarySearchTree();
    tree.add(10);
    tree.add(13);
    tree.add(16);
    expect(tree.contains(10, tree.root)).toBe(true);
  });


  it('can successfully do a preOrder traversal', () => {
    let tree = new Tree.BinarySearchTree();
    tree.add(10);
    tree.add(13);
    tree.add(16);
    
    expect(tree.preOrder(tree.root)).toEqual([10, 13, 16]);
  });

  it('can successfully do an inOrder traversal', () => {
    let tree = new Tree.BinarySearchTree();
    tree.add(10);
    tree.add(13);
    tree.add(16);

    expect(tree.inOrder(tree.root)).toEqual([10, 13, 16]);
  });

  it('can successfully do a postOrder traversal', () => {
    let tree = new Tree.BinarySearchTree();
    tree.add(10);
    tree.add(13);
    tree.add(16);

    expect(tree.postOrder(tree.root)).toEqual([16, 13, 10]);

  });

  it('can successfully add a value to a binary search tree', () => {
    let tree = new Tree.BinarySearchTree();
    expect(tree.add(10)).toBeUndefined();

  });

  it('can search a binary search tree for a value and get the correct true/false result', () => {
    let tree = new Tree.BinarySearchTree();
    tree.add(10);
    expect(tree.contains(10, tree.root)).toBe(true);
  });

});