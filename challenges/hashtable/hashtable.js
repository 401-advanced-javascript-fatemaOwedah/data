'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addL(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = node;
  }

  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

class Hashmap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) { 
    return key.split('').reduce((p, n) => {
      return p + n.charCodeAt(0);
    }, 0) * 599 % this.size;
  }

  add(key, value) {
    let hash = this.hash(key);
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }
    let entry = {[key]: value};
    this.map[hash].addL(entry);
  }

  get(key) {
    const idx = this.hash(key);
    while (this.map[idx] !=  key){
      if(this.map[idx] !== undefined) return this.map[idx];
      else return undefined; 
    }
  }
  contains(key){
    let value = this.get(key);
    if(value) return true;
    else return false;
  }
}



// let myHash = new Hashmap(5789);
// myHash.add('Cat', 'Paghera');
// myHash.add('Dog' ,'Mark');
// myHash.add('Bird' ,'LULU');

// myHash.map.forEach( (data, i )=> {
//   console.log(i, data && data.values());
// });
// console.log('contains===>', myHash.contains('Dog'));
// console.log('contains===>', myHash.contains('Owner'));

module.exports = {Node, LinkedList, Hashmap};