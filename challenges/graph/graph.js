'use strict';
class Vertices{
  constructor(value){
    this.value = value;
  }
}

class Edge{
  constructor(vertice,weight = 0){
    this.vertice = vertice;
    this.weight = weight;
  }
}

class Graph{
  constructor(){
    this.adjancyList = new Map();
  }
  addNode(value){
    this.adjancyList.set(value,[]);
  }
  addEdge(start,end,weight){
    if (!this.adjancyList.has(start) || !this.adjancyList.has(end)) {
      return 'no Vertices';
    } else {
      const adjacencies = this.adjancyList.get(start);
      adjacencies.push(new Edge(end, weight));
    }
  }
  getNodes(){
    let array = [];
    for (const [vertices, edge] of this.adjancyList.entries()) {
      array.push([vertices,edge]);
    }
    return array;
  }
  getNeighbors(vertices){
    if (this.adjancyList.has(vertices)) {
      return this.adjancyList.get(vertices);
    } else {
      return 'not found';
    }
  }
  size(){
    return this.adjancyList.size;
  }
}



module.exports = {Graph, Vertices};