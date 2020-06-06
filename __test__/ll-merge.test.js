'use strict';

let mergeList = require('../challenges/llMerge/ll-merge');

describe('YOU are in modle',()=>{
  it('merge',()=>{
    let   list1 = {
      head :{
        value: 2,
        next :{
          value: 3,
          next :{
            value:5,
            next: null,
          },
        },
      },
    };
    let   list2 = {
      head :{
        value: 4,
        next :{
          value: 9,
          next :{
            value:6,
            next: null,
          },
        },
      },
    };
    let merged = mergeList(list1,list2);
    expect(merged.head.value).toEqual(2);
    expect(merged.head.next.value).toEqual(4);
    expect(merged.head.next.next.value).toEqual(3);
    expect(merged.head.next.next.next.value).toEqual(9);
    expect(merged.head.next.next.next.next.value).toEqual(5);
    expect(merged.head.next.next.next.next.next.value).toEqual(6);
    expect(merged.head.next.next.next.next.next.next).toBeNull();
  });
  it('merge',()=>{
    let   list1 = {
      head :{
        value: 2,
        next :{
          value: 3,
          next :null,
        },
      },
    };
    let   list2 = {
      head :{
        value: 4,
        next :{
          value: 9,
          next :{
            value:6,
            next: null,
          },
        },
      },
    };
    let merged = mergeList(list1,list2);
    expect(merged.head.value).toEqual(2);
    expect(merged.head.next.value).toEqual(4);
    expect(merged.head.next.next.value).toEqual(3);
    expect(merged.head.next.next.next.value).toEqual(9);
    expect(merged.head.next.next.next.next.value).toEqual(6);
    expect(merged.head.next.next.next.next.next).toBeNull();
  });
  it('merge',()=>{
    let   list1 = {
      head :{
        value: 2,
        next :{
          value: 3,
          next :{
            value:5,
            next: null,
          },
        },
      },
    };
    let   list2 = {
      head :{
        value: 4,
        next :{
          value: 9,
          next :null,
        },
      },
    };
    let merged = mergeList(list1,list2);
    expect(merged.head.value).toEqual(2);
    expect(merged.head.next.value).toEqual(4);
    expect(merged.head.next.next.value).toEqual(3);
    expect(merged.head.next.next.next.value).toEqual(9);
    expect(merged.head.next.next.next.next.value).toEqual(5);
    expect(merged.head.next.next.next.next.next).toBeNull();
  });
});