'use strict';

//head -> [1] -> [3] -> [2] -> X	
//head -> [5] -> [9] -> [4] -> X
class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

function mergeLists(list1,list2){
  let current1 = list1.head; //[1] -> [3] -> [2] -> X
  let current2 = list2.head; //[5] -> [9] -> [4] -> X
  let node = new Node(null);//[1] -> null
  let prev = node;
  let iterate = 1;
  //{head: {value: ,next: }}
  while(current1 && current2){ 
    if(iterate%2){
      prev.next = current1;
      current1 = current1.next; 
    }
    else{
            
      prev.next = current2;
      current2 = current2.next;
    }
    iterate++;
    prev = prev.next;
  }
  if(current2){prev.next = current2;}
  if(current1){prev.next = current1;}
   
  console.log('output node',node);
  return {head: node.next};
}

module.exports = mergeLists;

