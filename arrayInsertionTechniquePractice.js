//^ Array Shifting to right:

//! Array 1:

// let arr1 = [3, 8, 12, 17, 25]; // initial array

// let valueToInsert1 = 10; // value

// let position1 = 2; // position
// //solution

// for (let i = arr1.length - 1; i >= position1; i--) {
//   arr1[i + 1] = arr1[i];
//   if (position1 == i) {
//     arr1[i] = valueToInsert1;
//   }
// }
// console.log(arr1);

// // [3, 8, 10, 12, 17, 25];  output

//! Array 2:

// let arr2 = [5, 15, 20, 30]; // initial array

// let valueToInsert2 = 25; // value

// let position2 = 3; // position
// //solution

// for (let i = arr2.length - 1; i >= position2; i--) {
//   arr2[i + 1] = arr2[i];
//   if (position2 === i) {
//     arr2[i] = valueToInsert2;
//   }
// }

// console.log(arr2);

// [5, 15, 20, 25, 30]; // output

//! Array 3:

// let arr3 = [1, 2, 3, 4, 5]; // initial array

// let valueToInsert3 = 6; // value

// let position3 = 5; // position (Inserting at the end)
// //solution

// let lengthForNew = 6;

// arr3.length = lengthForNew;
// arr3[arr3.length - 1] = valueToInsert3;

// console.log(arr3);

// // [1, 2, 3, 4, 5, 6]; output

//^ Two-Array Approach:

//! Steps:
//! 1. Use a `for` loop to shift elements to the right starting from the last index.
//! 2. Insert the new value at index 0.

//? solution: Split the array into two parts and insert at the beginning

// Expected Output: [3, 5, 10, 15, 20, 25];
// let arr2 = [5, 10, 15, 20, 25];
// let valueToInsert2 = 3;
// let position2 = 0;

// for (let i = arr2.length - 1; i >= position2; i--) {
//   arr2[i + 1] = arr2[i];
//   if (i == position2) {
//     arr2[i] = valueToInsert2;
//   }
// }

// console.log(arr2);

//! Steps:
//! 1. No shifting is needed since you’re inserting at the last position.
//! 2. Add the new element after the last element.

//? solution: Split the array into two parts and insert at the end

//Expected Output:[5, 10, 15, 20, 25, 30]
// let arr3 = [5, 10, 15, 20, 25];
// let valueToInsert3 = 30;
// let position3 = 5;

// arr3[arr3.length] = valueToInsert3;
// console.log(arr3);

// Steps:
// 1. Use a `for` loop to shift elements to the right from the last index to the position.
// 2. Insert the new value at index 3.

//? solution: Split the array and insert in the middle

// Expected Output:[5, 10, 15, 17, 20, 25, 30, 35, 40]

// let arr4 = [5, 10, 15, 20, 25, 30, 35, 40];
// let valueToInsert4 = 17;
// let position4 = 3;

// for (i = arr4.length - 1; i >= position4; i--) {
//   arr4[i + 1] = arr4[i];
//   if (i == position4) {
//     arr4[i] = valueToInsert4;
//   }
// }
// console.log(arr4);

// Steps:
// 1. Use a `for` loop to shift elements to the right starting from the last element at the position.
// 2. Insert the new value at the specified position.

// solution: Split the array and insert in the middle of a very large array
// Expected Output:[1, 1, ..., 1, 2, 1, 1, ..., 1]  1s up to index 499999, followed by 2, then 1s

let arr5 = new Array(1000000).fill(1);
let valueToInsert5 = 2;
let position5 = 500000;

// approach one
// for (let i = arr5.length - 1; i >= 0; i--) {
//   arr5[i + 1] = arr5[i];
//   if (position5 === i) {
//     arr5[i] = valueToInsert5;
//   }
// }

//approach two
// let leftSlice = arr5.slice(0, position5);
// let rightSlice = arr5.slice(position5);

// let result = [...leftSlice, valueToInsert5, ...rightSlice];

// console.log(result[position5 - 1], result[position5], result[position5 + 1]);

//^ Technique: Dynamic Array Doubling

let arr1 = [5, 10, 15];
let valueToInsert1 = 12;
let position1 = 2;

// Steps:
// 1. Double the array size (if needed).
// 2. Insert `valueToInsert1` at position 2.
// 3. Shift elements to the right if needed.

// Expected Output: [5, 10, 12, 15]
for (let i = arr1.length - 1; i >= 0; i--) {
  arr1[i + 1] = arr1[i];
  if (position1 === i) {
    arr1[i] = valueToInsert1;
  }
}
console.log(arr1);
