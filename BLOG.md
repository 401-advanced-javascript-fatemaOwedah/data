# data
## Insertion Sort.
Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array.
### Pseudocode
```javascript
 InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp
```
### Trace
![Solution](/assets/tr1.jpeg)
![Solution](/assets/tr2.jpeg)
### Code
```javascript
function InsertionSort(arr){
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];
    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = temp;
  }
  return arr;
```
### Test
```javascript
describe('Insertion Sort',()=>{
  it('Sort array',()=>{
    let array=[8,4,23,42,16,15];
    expect(InsertionSort(array)).toEqual([4,8,15,16,23,42]);
  });
  it('Reverse-sorted: ',()=>{
    let array=[20,18,12,8,5,-2];
    expect(InsertionSort(array)).toEqual( [-2,5,8,12,18,20]);
  });
  it('Few uniques:',()=>{
    let array=[5,12,7,5,5,7];
    expect(InsertionSort(array)).toEqual([ 5, 5, 5, 7, 7, 12 ]);
  });
  it('sort the Nearly-sorted array',()=>{
    let array=[2,3,5,7,13,11];
    expect(InsertionSort(array)).toEqual([2,3,5,7,11,13]);
  });
});
```
### Big O
Time o(n^2) ==> there is nested loop.
space o(1) ==> no additional space.

