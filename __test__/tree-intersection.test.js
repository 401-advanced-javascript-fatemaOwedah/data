'use strict';

const tree = require('../challenges/treeIntersection/tree-intersection');
describe('Node Module', () => {
  it('contructor()', ()=> {
    const value = 'test value';
    const node = new tree.Node(value);
    expect(node.value).toEqual(value);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });
});
describe('Binary Tree', ()=> {

  let tree1 = null;
  let tree2 = null;

  beforeAll(()=> {
    let firstNode1 = new tree.Node(150);
    let secondNode1 = new tree.Node(100);
    let thirdNode1 = new tree.Node(250);
    let fourthNode1 = new tree.Node(75);
    let fifthNode1 = new tree.Node(160);
    let sixthNode1 = new tree.Node(200);
    let seventhNode1 = new tree.Node(350);
    let eigthNode1 = new tree.Node (125);
    let ninthNode1 = new tree.Node (175);
    let tenthNode1 = new tree.Node (300);
    let eleventhNode1 = new tree.Node (500);
        
    let firstNode2 = new tree.Node(42);
    let secondNode2 = new tree.Node(100);
    let thirdNode2 = new tree.Node(600);
    let fourthNode2 = new tree.Node(15);
    let fifthNode2 = new tree.Node(160);
    let sixthNode2 = new tree.Node(200);
    let seventhNode2 = new tree.Node(350);
    let eigthNode2 = new tree.Node(125);
    let ninthNode2 = new tree.Node(175);
    let tenthNode2 = new tree.Node(4);
    let eleventhNode2 = new tree.Node(500);
    
    
    firstNode1.left = secondNode1;
    firstNode1.right = thirdNode1;
    secondNode1.left = fourthNode1;
    secondNode1.right = fifthNode1;
    thirdNode1.left = sixthNode1;
    thirdNode1.right = seventhNode1;
    fifthNode1.left = eigthNode1;
    fifthNode1.right = ninthNode1;
    seventhNode1.left = tenthNode1;
    seventhNode1.left = eleventhNode1;
    
    firstNode2.left = secondNode2;
    firstNode2.right = thirdNode2;
    secondNode2.left = fourthNode2;
    secondNode2.right = fifthNode2;
    thirdNode2.left = sixthNode2;
    thirdNode2.right = seventhNode2;
    fifthNode2.left = eigthNode2;
    fifthNode2.right = ninthNode2;
    seventhNode2.left = tenthNode2;
    seventhNode2.right = eleventhNode2;
    
    

    tree1 = new tree.BinaryTree(firstNode1);
    tree2 = new tree.BinaryTree(firstNode2);

    console.log(tree.tree_intersection(tree1, tree2));
  });

  it('preOrder()', ()=> {
    let expected = [150, 100, 75, 160, 125, 175, 250, 200, 350, 500];
    let preOrder = tree1.preOrder();
    expect(preOrder).toEqual(expected);
  });

  it('preOrder()', ()=> {
    let expected = [42,100,15,160,125,175,600,200,350,4,500];
    let preOrder = tree2.preOrder();
    expect(preOrder).toEqual(expected);
  });

  it('tree_intersection()', ()=> {
    let expected = [100, 160, 125, 175, 200, 350, 500];
    let intersection = tree.tree_intersection(tree1,tree2);
    expect(intersection).toEqual(expected);
  });
});