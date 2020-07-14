'use strict';
class Vertices {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertice, weight = 0) {
    this.vertice = vertice;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjancyList = new Map();
  }
  addNode(value) {
    this.adjancyList.set(value, []);
  }
  addEdge(start, end, weight) {
    if (!this.adjancyList.has(start) || !this.adjancyList.has(end)) {
      return 'no Vertices';
    } else {
      const adjacencies = this.adjancyList.get(start);
      adjacencies.push(new Edge(end, weight));
    }
  }
  getNodes() {
    let array = [];
    for (const [vertices, edge] of this.adjancyList.entries()) {
      array.push([vertices, edge]);
    }
    return array;
  }
  getNeighbors(vertices) {
    if (this.adjancyList.has(vertices)) {
      return this.adjancyList.get(vertices);
    } else {
      return 'not found';
    }
  }
  size() {
    return this.adjancyList.size;
  }
  bfs(startNode) {
    const queue = []; // Behaviour of the queue: first in first out 
    const vistedNodes = new Set(); // track the nodes that we visited

    queue.push(startNode);
    vistedNodes.add(startNode);

    while (queue.length) {
      const currentNode = queue.shift();
      const neighbors = this.getNeighbors(currentNode);
      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertice;
        if (!vistedNodes.has(neighborNode)) {
          vistedNodes.add(neighborNode);
          queue.push(neighborNode);
        }
      }
    }

    let array = [];
    for (let val of vistedNodes) {
      array.push(val.value);
    }
    return array;
  }
  getEdge(arr) {
    let n = this.getNeighbors(arr[0]);
    for (let i = 0; i < n.length; i++) {
      if (arr[1] === n[i].vertice) {
        return `True, $${n[i].weight}`;
      }
    }
    return `False, $0`;
  }
}

module.exports = { Graph, Vertices };