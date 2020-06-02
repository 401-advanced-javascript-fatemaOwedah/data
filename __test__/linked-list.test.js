const linkList = require('../challenges/likedList/linked-list');
describe('linkList Module', () => {
  const numbers = new linkList.LinkedList();
  const init = 5;
  const second = 10;
  const third = 3;
  it('it should create (an empty new instans) from the linklist', () => {
    expect(numbers).toEqual({ head: null });
  });
  it('insert', () => {
    expect(numbers.insert(init)).toEqual({ head:  { value: 5, next: null } });
  });
  it('test insert', () => {
    expect(numbers.head.value).toEqual(init);
  });
  it('test insert', () => {
    expect(numbers.insert(second)).toEqual({ head:  { value: 10, next: { value: 5, next: null } } });
    expect(numbers.head.value).toEqual(second);
    expect(numbers.head.next.value).toEqual(init);
  });
  it('Where k is greater than the length of the linked list', () => {
    expect(numbers.kthFromEnd(20)).toEqual('Exception');
  });
  it('Where k and the length of the list are the same', () => {
    expect(numbers.kthFromEnd(8)).toEqual("Exception");
  });
  it('Where k is not a positive integer', () => {
    expect(numbers.kthFromEnd(-8)).toEqual('Exception');
  });
  it('Where the linked list is of a size 1', () => {
    const newNumbers = new linkList.LinkedList();
    newNumbers.insert(9);
    expect(newNumbers.kthFromEnd(1)).toEqual(9);
  });
  it('where k is not at the end, but somewhere in the middle of the linked list', () => {
    expect(numbers.kthFromEnd(5)).toEqual("Exception");
  });
});