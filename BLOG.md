# data
## Insertion Sort.
Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array.
### Pseudocode
```javascript
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```
### Trace
![Solution](/assets/tr1.jpeg)
### Code
```javascript
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
```
### Test
```javascript
describe('Insertion Sort',()=>{
  it('Sort array',()=>{
    let array=[8,4,23,42,16,15];
    expect(Mergesort(array)).toEqual([4,8,15,16,23,42]);
  });
  it('Reverse-sorted: ',()=>{
    let array=[20,18,12,8,5,-2];
    expect(Mergesort(array)).toEqual( [-2,5,8,12,18,20]);
  });
  it('Few uniques:',()=>{
    let array=[5,12,7,5,5,7];
    expect(Mergesort(array)).toEqual([ 5, 5, 5, 7, 7, 12 ]);
  });
  it('sort the Nearly-sorted array',()=>{
    let array=[2,3,5,7,13,11];
    expect(Mergesort(array)).toEqual([2,3,5,7,11,13]);
  });
});
```
### Big O
Time o(n^2) ==> there is 2 while loop .
space o(n^2) ==> divisions of the array.

