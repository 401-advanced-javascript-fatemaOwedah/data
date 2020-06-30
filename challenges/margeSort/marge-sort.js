'use strict';
function Mergesort(arr) {
  let n = arr.length;
  
  if (n > 1) {
    let mid = Math.floor(n / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, n);
    Mergesort(left);    
    Mergesort(right);
    return Merge(left, right, arr);
  }
}
  
function Merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i = i + 1;
    } else {
      arr[k] = right[j];
      j = j + 1;
    }
    k = k + 1;
  }
  
  if (i === left.length) {
    while(j < right.length){
      arr[k] = right[j];
      j = j + 1;
      k = k + 1;
    }
  } else {
    while(i < left.length){
      arr[k] = left[i];
      i = i + 1;
      k = k + 1;
    }
  }
  return arr;
}
  
  
console.log('=====>', Mergesort([8, 4, 23, 42, 16, 15]));
console.log('=====>', Mergesort([20, 18, 12, 8, 5, -2]));
console.log('=====>', Mergesort([5, 12, 7, 5, 5, 7]));
console.log('=====>', Mergesort([2, 3, 5, 7, 13, 11]));
  
  
module.exports = Mergesort;