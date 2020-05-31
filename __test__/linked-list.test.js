'use strict';
const LinkedList = require('../challenges/likedList/linked-list');
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
    it('test append', () => {
        let newLinkedLi = new LinkedList();
        newLinkedLi.append('A');
        newLinkedLi.append('B');
        newLinkedLi.append('C');
        newLinkedLi.append('F');
        expect(newLinkedLi.toString()).toEqual('{A} -> {B} -> {C} -> {F} -> NULL');
    });
    it('test insert after', () => {
        let newLinkedLi = new LinkedList();
        newLinkedLi.insert('A');
        newLinkedLi.insert('B');
        newLinkedLi.insert('C');
        newLinkedLi.insertAfter('C','K');
        let newStr = '{A} -> {B} -> {C} -> {K} -> NULL';
        expect(newLinkedLi.toString()).toEqual(newStr);
    });
    it('test insert before', () => {
        let newLinkedLi = new LinkedList();
        newLinkedLi.insert('A');
        newLinkedLi.insert('B');
        newLinkedLi.insert('C');
        newLinkedLi.insertBefore('C', 'F');
        let newstr = '{A} -> {B} -> {F} -> {C} -> NULL';
        expect(newLinkedLi.toString()).toEqual(newstr);
    });
})