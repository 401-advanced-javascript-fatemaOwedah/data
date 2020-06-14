'use strict';

let tree = require('../challenges/fizzBuzzTree/fizz-buzz-tree');

let Node = tree.Node;
let FizzBuzzTree = tree.FizzBuzzTree;
let BinaryTree = tree.BinaryTree;

describe('Node Class: ', () => {
  it('Constructor Node', () => {
    let value = 1;
    let node = new tree.Node(value);
  
    expect(node.value).toBe(value);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });
});
  
describe('Binarytree Class', () => {
  
  let tree1 = null;
  
  beforeAll(() => {
    let one = new tree.Node(1);
    let two = new tree.Node(2);
    let three = new tree.Node(3);
    let four = new tree.Node(4);
    let five = new tree.Node(5);
    let six = new tree.Node(6);
    let seven = new tree.Node(7);
    let eight = new tree.Node(8);
    let nine = new tree.Node(9);
  
    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;
  
    tree1 = new tree.BinaryTree(one);
  
  });
  
  it('preOrder()', () => {
    let expected = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    let preOrder = tree1.preOrder();
    expect(preOrder).toEqual(expected);
  });
  
  it('inOrder()', () => {
    let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    let inOrder = tree1.inOrder();
    expect(inOrder).toEqual(expected);
  });
  
  it('postOrder()', () => {
    let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    let postOrder = tree1.postOrder();
    expect(postOrder).toEqual(expected);
  });
  
});


describe('Binary Tree Module', ()=>{
  let tree = null;
  beforeAll(()=>{
    let node1 = new Node(7);
    let node2 = new Node(9);
    let node3 = new Node(20);
    let node4 = new Node(15);
    let node5 = new Node(11);
    node1.left = node2;
    node1.right = node3;
    node2.left = node4;
    node3.right = node5;
  
    tree = new BinaryTree(node1);
  });
  it('If the value is divisible by 3, replace the value with “Fizz”',() => {
    expect(FizzBuzzTree(tree).root.left.value).toEqual('Fizz');
  });
  
  it('If the value is divisible by 5, replace the value with “Buzz”',() => {
    expect(FizzBuzzTree(tree).root.right.value).toEqual('Buzz');
  });
  it('If the value is divisible by 3 and 5, replace the value with “FizzBuzz”',() => {
    expect(FizzBuzzTree(tree).root.left.left.value).toEqual('FizzBuzz');
  });
  it('If the value is not divisible by 3 or 5, simply turn the number into a String',() => {
    expect(FizzBuzzTree(tree).root.value).toEqual('7');
    expect(FizzBuzzTree(tree).root.right.right.value).toEqual('11');
  });
});
