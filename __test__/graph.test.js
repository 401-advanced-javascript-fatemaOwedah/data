  
'use strict';

const Graph = require('../challenges/graph/graph');

describe('Graph Class',()=>{
  it('Node can be successfully added to the graph',()=>{
    const graph = new Graph.Graph();
    const one = new Graph.Vertices('1');
    const two = new Graph.Vertices('2');
    const three = new Graph.Vertices('3');
    const four = new Graph.Vertices('4');
    const five = new Graph.Vertices('5');
    graph.addNode(one);
    expect(graph.adjancyList.has(one)).toBeTruthy();
    graph.addNode(two);
    expect(graph.adjancyList.has(two)).toBeTruthy();
    graph.addNode(three);
    expect(graph.adjancyList.has(three)).toBeTruthy();
    graph.addNode(four);
    expect(graph.adjancyList.has(four)).toBeTruthy();
    graph.addNode(five);
    expect(graph.adjancyList.has(five)).toBeTruthy();
  });
  it('An edge can be successfully added to the graph',()=>{
    const graph = new Graph.Graph();
    const one = new Graph.Vertices('1');
    const two = new Graph.Vertices('2');
    const three = new Graph.Vertices('3');
    const four = new Graph.Vertices('4');
    const five = new Graph.Vertices('5');
    const six = new Graph.Vertices('6');
    graph.addNode(one);
    graph.addNode(two);
    graph.addNode(three);
    graph.addNode(four);
    graph.addNode(five);
    graph.addEdge(one,two);
    expect(graph.adjancyList.get(one)).toEqual([{vertice:two,weight:0}]);
    graph.addEdge(one,four);
    expect(graph.adjancyList.get(one)).toEqual([{vertice:two,weight:0},{vertice:four,weight:0}]);
    graph.addEdge(two,four);
    expect(graph.adjancyList.get(two)).toEqual([{vertice:four,weight:0}]);
    graph.addEdge(three,two);
    expect(graph.adjancyList.get(three)).toEqual([{vertice:two,weight:0}]);
    graph.addEdge(five,three);
    expect(graph.adjancyList.get(five)).toEqual([{vertice:three,weight:0}]);
    graph.addEdge(five,four);
    expect(graph.adjancyList.get(five)).toEqual([{vertice:three,weight:0},{vertice:four,weight:0}]);
    expect(graph.addEdge(six,four)).toEqual('no Vertices');
  });
  it('A collection of all nodes can be properly retrieved from the graph',()=>{
    const graph = new Graph.Graph();
    const one = new Graph.Vertices('1');
    const two = new Graph.Vertices('2');
    const three = new Graph.Vertices('3');
    const four = new Graph.Vertices('4');
    const five = new Graph.Vertices('5');
    graph.addNode(one);
    graph.addNode(two);
    graph.addNode(three);
    graph.addNode(four);
    graph.addNode(five);
    graph.addEdge(one,two);
    graph.addEdge(one,four);
    graph.addEdge(two,four);
    graph.addEdge(three,two);
    graph.addEdge(five,three);
    graph.addEdge(five,four);
    let result = [
      [ one, [{vertice:two,weight:0},{vertice:four,weight:0}] ],
      [two , [{vertice:four,weight:0}]],
      [ three, [{vertice:two,weight:0}]],
      [four , [] ],
      [five , [{vertice:three,weight:0},{vertice:four,weight:0}]],
    ];
    expect(graph.getNodes()).toEqual(result);
  });
  it('All appropriate neighbors can be retrieved from the graph',()=>{
    const graph = new Graph.Graph();
    const one = new Graph.Vertices('1');
    const two = new Graph.Vertices('2');
    const three = new Graph.Vertices('3');
    const four = new Graph.Vertices('4');
    graph.addNode(one);
    graph.addNode(two);
    graph.addNode(four);
    graph.addEdge(one,two);
    graph.addEdge(one,four);
    expect(graph.getNeighbors(one)).toEqual([{vertice:two,weight:0},{vertice:four,weight:0}]);
    expect(graph.getNeighbors(three)).toEqual('not found');
  });
  it('Neighbors are returned with the weight between nodes included',()=>{
    const graph = new Graph.Graph();
    const one = new Graph.Vertices('1');
    const two = new Graph.Vertices('2');
    const three = new Graph.Vertices('3');
    const four = new Graph.Vertices('4');
    graph.addNode(one);
    graph.addNode(two);
    graph.addNode(four);
    graph.addEdge(one,two);
    graph.addEdge(one,four);
    expect(graph.getNeighbors(one)).toEqual([{vertice:two,weight:0},{vertice:four,weight:0}]);
    expect(graph.getNeighbors(three)).toEqual('not found');
  });
  it('The proper size is returned, representing the number of nodes in the graph',()=>{
    const graph = new Graph.Graph();
    const one = new Graph.Vertices('1');
    const two = new Graph.Vertices('2');
    const four = new Graph.Vertices('3');
    graph.addNode(one);
    graph.addNode(two);
    graph.addNode(four);
    graph.addEdge(one,two);
    graph.addEdge(one,four);
    expect(graph.size()).toEqual(3);
  });
});