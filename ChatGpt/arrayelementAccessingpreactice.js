//^Problem
// You are given a rotated sorted array. Without using built-in methods,
// find the element at a given index after identifying the pivot.

//?Explanation
// A rotated sorted array is a sorted array that has been rotated at some pivot.
// The goal is to access the element at a given index, considering the array's rotation.

// Variables
const arr = [30, 40, 50, 10, 20]; // Rotated sorted array
let newArr = [];
const index = 3; // The index we want to access (the element in the rotated array)
for (let i = 0; i <= arr.length; i++) {
  let top = 0;
  let low = arr.length - 1;
  if (arr[top] < arr[low]) {
    newArr.push(arr[top]);
  } else {
    newArr.push(arr[low]);
  }
}
console.log(newArr);

// Output
// Access the element at the given index after finding the pivot and adjusting the index.
