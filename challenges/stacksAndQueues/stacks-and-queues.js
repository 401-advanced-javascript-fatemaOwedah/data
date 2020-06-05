'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.storage = new Array();
    this.top = null;
  }
  push(value){
    if(this.top){
      let node = new Node(value);
      node.next = this.storage.length;
      this.storage.unshift(node);
      this.top = this.storage[0];
    }
    else{
      let node = new Node(value);
      this.storage.unshift(node);
      this.top = this.storage[0];  
    }
        
  }
  pop(){
    if(this.top){
      this.storage.shift();
      if(this.storage.length){
        this.top = this.storage[0];
      }else{
        this.top=null;
      }
    }   
  }
  peek(){
    return this.top;
  }
  isEmpty(){ 
    if(!this.storage.length){
      return true;
    }
    else{
      return false;
    }
  }
}

class Queue{
  constructor(){
    this.storage = new Array();
    this.front = null;
  }
  enqueue(value){
    if(!this.front){
      let node = new Node(value);
      this.storage.push(node);
      this.front = this.storage[0];
    }
    else{
      let node = new Node(value);
      let len = this.storage.length;
      this.storage[len-1].next = len +1;
      this.storage.push(node);
      this.front = this.storage[0];  
    }
        
  }
  dequeue(){
    if(this.front){
      this.storage.shift();
      if(this.storage.length){
        this.front = this.storage[0];
      }else{
        this.front=null;
      }
    } 
  }
  peek(){
    return this.front;
  }
  isEmpty(){
    if(!this.storage.length){
      return true;
    }
    else{return false;}
  }
}

module.exports = {
  Queue: Queue,
  Stack: Stack,
};