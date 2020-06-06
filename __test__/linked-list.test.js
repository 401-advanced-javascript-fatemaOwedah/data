'use strict';

const LinkedList = require('../challenges/linkedList/linked-list');

describe('module LinkedList ',()=>{
  it('constructor()',()=>{
    let creatLink = new LinkedList.LinkedList();
    expect(creatLink.head).toBeNull();
  });
  it('insert()',()=>{
    let creatLink = new LinkedList.LinkedList();
    let headValue = 'a';
    let headNode = creatLink.insert(headValue);
    expect(headNode.head.value).toEqual(headValue);
    expect(headNode.head.next).toBeNull();
    let nodeValue = 'b';
    creatLink.insert(nodeValue);
    expect(headNode.head.next.value).toEqual(nodeValue);
    expect(headNode.head.next.next).toBeNull();
    let nextNodeValue = 'c';
    creatLink.insert(nextNodeValue);
    expect(headNode.head.next.next.value).toEqual(nextNodeValue);
    expect(headNode.head.next.next.next).toBeNull();
  });
  it('includes()',()=>{
    let creatLink = new LinkedList.LinkedList();
    creatLink.insert('a');
    creatLink.insert('b');
    creatLink.insert('c');
    expect(creatLink.includes('a')).toBeTruthy();
    expect(creatLink.includes('b')).toBeTruthy();
    expect(creatLink.includes('c')).toBeTruthy();
    expect(creatLink.includes('f')).toBeFalsy();
    expect(creatLink.includes('k')).toBeFalsy();
  });
  it('toString()',()=>{
    let creatLink = new LinkedList.LinkedList();
    creatLink.insert('a');
    creatLink.insert('b');
    creatLink.insert('c');
    expect(creatLink.toString()).toEqual('{a} -> {b} -> {c} -> NULL');
  });
  
  it('test append()',()=>{
    const link = new LinkedList.LinkedListAdd();
    let head = link.insert('a');
    link.insert('b');
    link.insert('c');
    let val = 4;
    link.append(val);
    expect(head.head.next.next.next.value).toEqual(4);
    expect(head.head.next.next.next.next).toBeNull();
  });
  it('insertBefore()',()=>{
    const link = new LinkedList.LinkedListAdd();
    let head = link.insert('a');
    link.insert('b');
    link.insert('c');
    link.insertBefore('b','d');
    expect(head.head.next.value).toEqual('d');
    expect(head.head.next.next.value).toEqual('b');
  });

  it('insertBefore()',()=>{
    const link = new LinkedList.LinkedListAdd();
    let head = link.insert('a');
    link.insert('b');
    link.insert('b');
    link.insertBefore('b','d');
    expect(head.head.next.value).toEqual('d');
    expect(head.head.next.next.value).toEqual('b');
    expect(head.head.next.next.next.value).toEqual('b');
  });
  it('insertBefore()',()=>{
    const link = new LinkedList.LinkedListAdd();
    link.insert('a');
    link.insert('b');
    link.insert('c');
    expect(link.insertBefore(5,'d')).toEqual('Exception');
  });
  it('insertAfter()',()=>{
    const link = new LinkedList.LinkedListAdd();
    link.insert('a');
    link.insert('b');
    link.insert('c');
    expect(link.insertAfter(5,'d')).toEqual('Exception');
  });
  it('insertAfter()',()=>{
    const link = new LinkedList.LinkedListAdd();
    let head = link.insert('a');
    link.insert('b');
    link.insert('c');
    link.insertAfter('b','d');
    expect(head.head.next.value).toEqual('b');
    expect(head.head.next.next.value).toEqual('d');
    expect(head.head.next.next.next.value).toEqual('c');
  });
  it('insertAfter()',()=>{
    const link = new LinkedList.LinkedListAdd();
    let head = link.insert('a');
    link.insert('b');
    link.insert('b');
    link.insertAfter('b','d');
    expect(head.head.next.value).toEqual('b');
    expect(head.head.next.next.value).toEqual('d');
    expect(head.head.next.next.next.value).toEqual('b');
  });
  it('insertAfter()',()=>{
    const link = new LinkedList.LinkedListAdd();
    let head = link.insert('a');
    link.insert('b');
    link.insert('c');
    link.insertAfter('c','d');
    expect(head.head.next.next.value).toEqual('c');
    expect(head.head.next.next.next.value).toEqual('d');
    expect(head.head.next.next.next.next).toBeNull();
  });
});