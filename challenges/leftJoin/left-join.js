'use strict';
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
  
class LinkedList {
  constructor(){
    this.head = null;
  }
  add(value){
    let node = new Node(value);
    if (!this.head) this.head = node;
    else{
      node.next = this.head;
      this.head = node;
    }
  }
}
  
class HashMap {
  constructor(size){
    this.size = size;
    this.storage = new Array(size);
  }
  hash(key){
    let sum = 0;
    for (let i = 0; i < key.length; i++) {
      sum += key[i].charCodeAt(0);
    }
    return sum * 19 % this.size;
  }
  add(key, value){
    let hashedKey = this.hash(key);
    if (!this.storage[hashedKey]) {
      let ll = new LinkedList();
      ll.add({key,value});
      this.storage[hashedKey] = ll;
    }else{
      this.storage[hashedKey].add({key, value});
    }
  }
  get(key){
    for(let i = 0; i <= this.storage.length;i++){
      if (this.storage[i] && this.storage[i].head.value.key === key) return this.storage[i].head.value.value;
    }
    return 'Item Does Not Exist';
  }
  contain(key){
    for(let i = 0; i <= this.storage.length;i++){
      if (this.storage[i] && this.storage[i].head.value.key === key) return true;
    }
    return null;
  }
}

function leftJoins(hashMap1, hashMap2) {
  for (let i = 0; i < hashMap2.storage.length; i++) {
    if (hashMap2.storage[i] && hashMap1.contain(hashMap2.storage[i].head.value.key)){
      hashMap1.add(hashMap2.storage[i].head.value.key,hashMap2.storage[i].head.value.value);
    }
  }
  let result = [];
  for (let i = 0; i < hashMap1.storage.length; i++) {
    if(hashMap1.storage[i]){
      if(!hashMap1.storage[i].head.next){
        result.push([hashMap1.storage[i].head.value.key,hashMap1.storage[i].head.value.value,hashMap1.storage[i].head.next]);
      } 
      else{
        result.push([hashMap1.storage[i].head.value.key,hashMap1.storage[i].head.value.value,hashMap1.storage[i].head.next.value.value]);
      } 
    }
  }
  return result;
}

module.exports = {Node, LinkedList, HashMap, leftJoins};
