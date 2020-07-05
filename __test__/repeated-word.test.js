'use strict';

const Hashmap = require('../challenges/repeatedWord/repeated-word');
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
describe('It should return the first repeated word in the srting', ()=> {

  it('should return a',()=>{
    let str = 'Once upon a time, there was a brave princess who...';
    expect(Hashmap.repeatedWord(str)).toEqual('a');
    expect(typeof Hashmap.repeatedWord(str)).toBe('string');
  });

  it('should return it ',()=>{
    let str = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    expect(Hashmap.repeatedWord(str)).toEqual('it');
    expect(typeof Hashmap.repeatedWord(str)).toBe('string');
  });

  it('should return summer',()=>{
    let str = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
    expect(Hashmap.repeatedWord(str)).toEqual('summer');
    expect(typeof Hashmap.repeatedWord(str)).toBe('string');
  });
});