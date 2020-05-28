'use strict';
const LinkedList = require('./linked-list');
describe('Linked List module', () => {
    it('constructor()', () => {
        let creatLink = new LinkedList();
        expect(creatLink.head).toBeNull();
    });
    it('test insert()', () => {
        let listNew = new LinkedList();
        let initialValue = '1';
        listNew.insert(initialValue);
        expect(listNew.head.val).toEqual(initialValue);
        expect(listNew.head.next).toBeNull();
        let secondValue = '2';
        listNew.insert(secondValue);
        expect(listNew.head.val).toEqual(initialValue);
        let next1 = listNew.head.next;
        expect(next1.val).toEqual(secondValue);
        expect(next1.next).toBeNull();
        let thirdValue = '3';
        listNew.insert(thirdValue);
        expect(listNew.head.val).toEqual(initialValue);
        let next2 = listNew.head.next.next;
        expect(next2.val).toEqual(thirdValue);
        expect(next2.next).toBeNull();
        let forthValue = '4';
        listNew.insert(forthValue);
        expect(listNew.head.val).toEqual(initialValue);
        let next3 = listNew.head.next.next.next;
        expect(next3.val).toEqual(forthValue);
        expect(next3.next).toBeNull();
    });
    it('test includes()', () => {
        let listNew = new LinkedList();
        listNew.insert('1');
        listNew.insert('2');
        listNew.insert('3');
        listNew.insert('4');
        expect(listNew.includes('1')).toBeTruthy();
        expect(listNew.includes('2')).toBeTruthy();
        expect(listNew.includes('3')).toBeTruthy();
        expect(listNew.includes('4')).toBeTruthy();
        expect(listNew.includes('5')).toBeFalsy();
        expect(listNew.includes('6')).toBeFalsy();
    });
    it('test toString()', () => {
        let listNew = new LinkedList();
        listNew.insert('1');
        listNew.insert('2');
        listNew.insert('3');
        listNew.insert('4');
        expect(listNew.toString()).toEqual('{1} -> {2} -> {3} -> {4} -> NULL');
    });
})