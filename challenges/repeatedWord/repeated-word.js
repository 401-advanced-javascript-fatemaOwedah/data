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

function repeatedWord (str){
  // split by the space.
  let arr= str.split(' ');
  // make a new hashmap
  let Hash = new Hashmap(5789);
  // made for loop 
  for(let i = 0; i < arr.length; i++){
    // convert to lowecase
    arr[i] = arr[i].toLowerCase();
    // if it have . or , then slice it
    if(arr[i].includes(',')){
      arr[i]= arr[i].slice(0, arr[i].length-1);
    } 
    if(Hash.contains(arr[i])){
      return arr[i];
    } 
    Hash.add(arr[i], arr[i]);
  } 
}
// repeatedWord('Once upon a time, there was a brave princess who...');
// repeatedWord('It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...');
// repeatedWord('It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...');

module.exports = {Node, LinkedList, Hashmap, repeatedWord};