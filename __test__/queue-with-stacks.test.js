'use strict';

const PseudoQueue = require('../challenges/queueWithStacks/queue-with-stacks');

describe('Stack ', () => {
  it('1. Can successfully enqueue onto a stack', () => {
    let newQueue = new PseudoQueue();
    expect(newQueue.isEmpty()).toBeTruthy();
    newQueue.enqueue('1');
    expect(newQueue.peek()).toBe('1');
  });

  it('2. Can successfully enqueue multiple values onto a PseudoQueue', () => {
    let newQueue = new PseudoQueue();
    newQueue.enqueue('1');
    newQueue.enqueue('2');
    newQueue.enqueue('3');
    newQueue.enqueue('4');
    expect(newQueue.peek()).toBe('1');
  });

  it('3. Can successfully dequeue off the PseudoQueue', () => {
    let newQueue = new PseudoQueue();
    newQueue.enqueue('1');
    newQueue.enqueue('5');
    newQueue.enqueue('2');
    newQueue.enqueue('3');

    expect(newQueue.isEmpty()).toBe(false);
    expect(newQueue.peek()).toBe('1');

    newQueue.dequeue();

    expect(newQueue.peek()).toBe('1');
  });

  it('4. Can successfully dequeue multiple nodes onto a PseudoQueue', () => {
    let newQueue = new PseudoQueue();
    newQueue.enqueue('1');
    newQueue.enqueue('5');
    newQueue.enqueue('2');
    newQueue.enqueue('3');

    expect(newQueue.isEmpty()).toBeFalsy;
    expect(newQueue.peek()).toBe('1');

    newQueue.dequeue();
    newQueue.dequeue();
    newQueue.dequeue();
    newQueue.dequeue();

    expect(newQueue.isEmpty()).toBe(true);
    expect(newQueue.peek()).toBe(null);
  });

  it('5. Can successfully peek the top node of the PseudoQueue', () => {
    let newQueue = new PseudoQueue();
    newQueue.enqueue('1');

    expect(newQueue.peek()).toBe('1');
  });

  it('6. Raises an exception when peek or pop is called on an empty PseudoQueue', () => {
    let newQueue = new PseudoQueue();

    expect(newQueue.isEmpty()).toBeTruthy();
    expect(newQueue.peek()).toBeFalsy();
    expect(() => {
      newQueue.dequeue();
    }).toThrow();
  });

});