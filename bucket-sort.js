/*
6. Bucket sort
Write an O(n) algorithm to sort an array of integers, where you 
know in advance what the lowest and highest values are. You can't
use arr.splice(), shift() or unshift() for this exercise.
 */

//bubble sort??

// function bucketSort() {
//   let highestVal = 10;
//   let lowestVal = 6;

// }

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

function bubbleSort(array) {
  let swaps = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      swap(array, i, i + 1);
      swaps++;
    }
  }

  if (swaps > 0) {
    return bubbleSort(array);
  }
  return array;
};

console.log(bubbleSort([1,5,3,10]))