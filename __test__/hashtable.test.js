'use strict';

const Hashmap = require('../challenges/hashtable/hashtable');
describe('Node Module', () => {
  it('contructor()', ()=> {
    const value = 'test value';
    const node = new Hashmap.Node(value);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
  });
});
describe('Linked List module', () => {
  it('constructor()', () => {
    let creatLink = new Hashmap.LinkedList();
    expect(creatLink.head).toBeNull();
  });
});
describe('HashTable Module', () => {
  it('Test adds to the HashTable', () => {
    const myHashmap = new Hashmap.Hashmap(5789);
    myHashmap.add('Cat', 'Paghera');
    myHashmap.map.forEach((data, i) => {
      let theValue = data.values();
      expect(theValue).toEqual([{'Cat': 'Paghera'}]);
    });
  });
  it('Test contains in HashTable', () => {
    const myHashmap = new Hashmap.Hashmap(5789);
    myHashmap.add('Dog' ,'Mark');
    let dog = myHashmap.contains('Dog');
    let rabbit = myHashmap.contains('Rabbit');
    expect(dog).toBeTruthy();
    expect(rabbit).toBeFalsy();
  });

  it('Test get from HashTable', () => {
    const myHashmap = new Hashmap.Hashmap(5789);
    myHashmap.add('Bird' ,'LULU');
    let getValue = myHashmap.get('Bird');
    expect(getValue.values()).toEqual([{'Bird' :'LULU'}]);
  });
});