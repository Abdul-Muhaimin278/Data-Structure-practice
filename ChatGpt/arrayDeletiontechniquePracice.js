//^ Technique: Shifting Elements

//! Case 1

//? Problem: Delete the element at index 2 in the array by shifting elements from right to left to fill the gap. Only use a for loop; do not use any built-in array modification methods.

// const array = [10, 20, 30, 40, 50];
// const index = 2;

// Expected output:
// [10, 20, 40, 50]

// for (let i = index; i < array.length; i++) {
//   array[i] = array[i + 1];
// }
// array.length = array.length - 1;
// console.log("outside==>", array);

//! Case 2

//? Problem: Delete the element at index 1 in the array by shifting elements from right to left to fill the gap. Only use a for loop; do not use any built-in array modification methods. Handle edge cases where the index is invalid or out of bounds.

// const array = [5, 10, 15, 20, 25];
// const index = 1;
// if (index > 0 && index < array.length) {
//   for (let i = index; i < array.length - 1; i++) {
//     array[i] = array[i + 1];
//   }
//   array.length = array.length - 1;
// }
// console.log(array);

// Expected output:
// [5, 15, 20, 25]

//! Case 3

//? Problem: Delete the element at index 0 in the array by shifting elements from right to left. You can only use a while loop for iteration. Do not use any built-in array modification methods. Handle edge cases where the array is empty or the index is invalid.

// const array = [10, 20, 30, 40, 50];
// const index = 0;
// let i = 0;

// while (i < array.length - 1) {
//   array[i] = array[i + 1];
//   i++;
// }
// array.length = array.length - 1;
// console.log(array);

// Expected output:
// [20, 30, 40, 50]

//! Case 4

//? Problem: Delete the element at the last index of the array without directly accessing it using `array.length` or any other built-in array method. You must shift elements from right to left. Handle edge cases where the array is empty or the index is invalid.

// let array = [5, 10, 15, 20, 25];
// let index = array.length - 1;
// let i = index;

// while (i <= index) {
//   array[i] = array[i + 1];
//   i++;
// }
// console.log(array);
// Expected output:
// [5, 10, 15, 20]

//! Case 5

//? Problem: Delete the element at an arbitrary index in the array. You cannot use `array.length` directly or any built-in array methods. You must shift elements from right to left using a **for loop**. Handle edge cases where the array is empty or the index is invalid.

const array = [100, 200, 300, 400, 500];
const index = 2; // Arbitrary index to delete

// let size = 0;
// for (let i = 0; array[i] !== undefined; i++) {
//   size++;
// }

// if (index >= 0 && index < size) {
//   for (let i = index; i < size - 1; i++) {
//     array[i] = array[i + 1];
//   }
//   array[size - 1] = undefined;
// }
// console.log(array);

// Expected output:
// [100, 200, 400, 500]
