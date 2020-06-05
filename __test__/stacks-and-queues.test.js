'use strict';

let stackAndQueue = require('../challenges/stacksAndQueues/stacks-and-queues');

describe('Stack test',()=>{
  it('instance Stack',()=>{
    let stack = new stackAndQueue.Stack();
    expect(stack instanceof stackAndQueue.Stack).toBeTruthy();
  });
  it('push()',()=>{
    let stack = new stackAndQueue.Stack();
    stack.push('1');
    expect(stack.top).toEqual({value:'1',next:null});
    stack.push('2');
    expect(stack.top).toEqual({value:'2',next:1});
    stack.push('3');
    expect(stack.top).toEqual({value:'3',next:2});
  });
  it('pop()',()=>{
    let stack = new stackAndQueue.Stack();
    stack.pop();
    expect(stack.top).toBeNull();
    stack.push('1');
    stack.pop();
    expect(stack.top).toBeNull();
    stack.push('1');
    stack.push('2');
    stack.push('3');
    stack.pop();
    expect(stack.top).toEqual({value:'2',next:1});
  });
  it('peek()',()=>{
    let stack = new stackAndQueue.Stack();
    expect(stack.peek()).toBeNull(); 
    stack.push('1');
    stack.push('2');
    expect(stack.peek()).toEqual({value:'2',next:1}); 
  });
  it('isEmpty()',()=>{
    let stack = new stackAndQueue.Stack();
    expect(stack.isEmpty()).toBeTruthy();
    stack.push('1');
    expect(stack.isEmpty()).toBeFalsy();
  });
});

describe('Queue',()=>{
  it('instance Stack',()=>{
    let queue = new stackAndQueue.Queue();
    expect(queue instanceof stackAndQueue.Queue).toBeTruthy();
  });
  it('enqueue()',()=>{
    let queue = new stackAndQueue.Queue();
    queue.enqueue('1');
    expect(queue.front).toEqual({value:'1',next:null});
    queue.enqueue('2');
    expect(queue.front).toEqual({value:'1',next:2});
    expect(queue.storage[1]).toEqual({value:'2',next:null});
    queue.enqueue('3');
    expect(queue.front).toEqual({value:'1',next:2});
    expect(queue.storage[1]).toEqual({value:'2',next:3});
    expect(queue.storage[2]).toEqual({value:'3',next:null});
  });
  it('dequeue()',()=>{
    let queue = new stackAndQueue.Queue();
    queue.dequeue();
    expect(queue.front).toBeNull();
    queue.enqueue('1');
    queue.dequeue();
    expect(queue.front).toBeNull();
    queue.enqueue('1');
    queue.enqueue('2');//null
    queue.dequeue();
    expect(queue.front).toEqual({value:'2',next:null});
    queue.enqueue('3');//2->2,3->3
    expect(queue.front).toEqual({value:'2',next:2});
    queue.enqueue('4');//2->2,3->3,4->null
    queue.dequeue();//3->3,4->null
    expect(queue.front).toEqual({value:'3',next:3});
  });
  it('peek()',()=>{
    let queue = new stackAndQueue.Queue();
    expect(queue.peek()).toBeNull();
    queue.enqueue('1');
    expect(queue.peek()).toEqual({value:'1',next:null});
    queue.enqueue('2');
    expect(queue.peek()).toEqual({value:'1',next:2});
  });
  it('isEmpty',()=>{
    let queue = new stackAndQueue.Queue();
    expect(queue.isEmpty()).toBeTruthy();
    queue.enqueue('1');
    expect(queue.isEmpty()).toBeFalsy(); 
  });
});