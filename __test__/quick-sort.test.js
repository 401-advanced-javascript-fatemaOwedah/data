'use strict';

const QuickSort = require('../challenges/quickSort/quick-sort');
describe('Insertion Sort',()=>{
  it('Sort array',()=>{
    let array=[8,4,23,42,16,15];
    expect(QuickSort(array,0,5)).toEqual([4,8,15,16,23,42]);
  });
  it('Reverse-sorted: ',()=>{
    let array=[20,18,12,8,5,-2];
    expect(QuickSort(array,0,5)).toEqual( [-2,5,8,12,18,20]);
  });
  it('Few uniques:',()=>{
    let array=[5,12,7,5,5,7];
    expect(QuickSort(array,0,5)).toEqual([ 5, 5, 5, 7, 7, 12 ]);
  });
  it('sort the Nearly-sorted array',()=>{
    let array=[2,3,5,7,13,11];
    expect(QuickSort(array,0,5)).toEqual([2,3,5,7,11,13]);
  });
});