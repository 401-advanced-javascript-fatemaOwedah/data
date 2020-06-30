# data
## Quick Sort.
Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array.
### Pseudocode
```javascript
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
```
### Trace
![Solution](/assets/tr1.jpeg)
### Code
```javascript
function QuickSort(arr, left, right){
  if(left < right){
    let position = Partition(arr, left, right);

    QuickSort(arr, left, position - 1);
    QuickSort(arr, position + 1, right);
  }
  return arr;
}

function Partition(arr, left, right){
  let pivot = arr[right];
  let low = left-1;

  for(let i = left; i < right; i++){
    if(arr[i] <= pivot){
      low++;
      Swap(arr, i, low);
    }
  }
  Swap(arr, right, low + 1);
  return low + 1;
}

function Swap(arr, i, low){
  let temp=arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}
```
### Test
```javascript
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
```
### Big O
Time o(n) ==> there is for loop .
space o(1) ==> no addition in space.

