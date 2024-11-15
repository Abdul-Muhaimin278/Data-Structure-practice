//nested array

// function sumNestedArray(){
//      const nestedArray = [[1, 2, 3], [4, 5], [6]];
//     //  let merge = nestedArray.flat();
//      let sum = 0
//      for(let i=0;i<nestedArray.length;i++){
//         for(let j = 0;j<nestedArray[i].length;j++){

//             sum += nestedArray[i][j];
//         }

//      }
//      console.log("the sum is:",sum);

// }
// sumNestedArray()

//next

//flat array
// function flattenedArray(){

// const nestedStrings = [['hello', 'world'], ['foo', 'bar', ['baz', 'qux']]];
// let result = []
// for(let i = 0;i<nestedStrings.length;i++){
//     for(let j=0;j<nestedStrings[i].length;j++){
//       if(Array.isArray(nestedStrings[i][j])){
//         for(let k=0;k<nestedStrings[i][j].length;k++){

//             result.push(nestedStrings[i][j][k])
//         }
//       }else{
//         result.push(nestedStrings[i][j])
//       }
//     }
// }
// // let merge = nestedStrings.flat(Infinity)
// // console.log(merge);
// console.log(result);

// }
// flattenedArray()

//next
//find max
// function findMax() {
//     const numbersArray = [[1, 2, 3], [4, 5], [6, 7, 8]];
//     // let flat = numbersArray.flat()
//     // let max = Math.max(...flat)
//     let max = 0
//     // console.log("Max Number is :",max);
//     for(let i = 0;i<numbersArray.length;i++){
//         for(let j=0;j<numbersArray[i].length;j++){
//              max = Math.max(numbersArray[i][j])

//         }
//     }
//     console.log("Max Number is :",max);
// }
// findMax()

//next
//find repeat
// function generateFrequencyObject(){
//     const stringsArray = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];
//     let result = {};
//       for (let x of stringsArray) {
//         result[x] = result[x] ? result[x] + 1 : 1;
//       }

//       console.log(result);

// }
// generateFrequencyObject()

//next
// function uniqueValues(){
//     const mixedArray = [[1, 2, 3], [2, 3, 4], [3, 4, 5]];
// //     let flat  = mixedArray.flat()
// //     let results = flat.filter((value,index)=>flat.indexOf(value)===index)
// //    console.log(results);
// let results = []
// for(let i = 0;i<mixedArray.length;i++){
//     for(let j =0;j<mixedArray[i].length;j++){
//         let value = mixedArray[i][j]
//          if(!results.includes(value)){
//             results.push(value)
//          }
//     }

// }
// console.log(results);

// }
// uniqueValues()

// const numbers = [
//   5, 12, 8, 21, 34, 55, 3, 9, 16, 42, 27, 33, 14, 19, 23, 44, 51, 6, 11, 18, 29,
//   31, 37, 48, 25, 2, 10, 39, 17, 26,
// ];

// let input = document.getElementById("demo1");

// function test() {
//   if (Math.sign(input.value) === -1) {
//     console.log("negative value");

//     alert(numbers[numbers.length - input.value * -1]);
//   } else if (!Number(input.value)) {
//     alert("Please enter a number ");
//   } else if (input.value > 0) {
//     alert(numbers[input.value]);
//   }
// }

//====dsa part2

// function test() {
//   const numbers = [
//     5, 12, 8, 21, 34, 55, 3, 9, 16, 42, 27, 33, 14, 19, 23, 44, 51, 6, 11, 18,
//     29, 31, 37, 48, 25, 2, 10, 39, 17, 26,
//   ];
//   let position = document.getElementById("demo1").value;

//   let value = document.getElementById("demo2").value;
//   // value = parseInt(value);
//   // for (let i = numbers.length - 1; i >= 0; i--) {
//   //   if (i >= position) {
//   //     numbers[i + 1] = numbers[i];
//   //     if (i == position) {
//   //       numbers[i] = value;
//   //     }
//   //   }
//   // }
//   numbers.splice(position,1)
//   console.log(numbers);
// }
// function test() {
//   const numbers = [5, 12, 8, 21, 34, 55, 3, 9, 16];

//   let position = document.getElementById("demo1").value;
//   position = parseInt(position);
//   // for (let i = position; i < numbers.length - 1; i++) {
//   //   // numbers[i] = numbers[i + 1];

//   // }

//   let filteredNum = numbers.filter((num, index) => index !== position);
//   console.log("filters", filteredNum);

//   // numbers.length = numbers.length - 1;
//   // alert(numbers);
// }

//==== dsa3

// function test() {
//   const numbers = [5, 12, 8, 21, 34, 55, 3, 9, 16];
//   let position = document.getElementById("demo1").value;
//   position = parseInt(position);
//   numbers[position] = numbers[numbers.length - 1];
//   numbers.length = numbers.length - 1;

//   console.log(numbers);
// }
//       test()

//==== dsa 4

// function test() {
//   const numbers = [5, 12, 8, 21, 34, 55, 3, 9, 16];
//   let position = document.getElementById("demo1").value;
//   position = parseInt(position);
//   let index;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] == position) {
//     index = i;
//   }
// }

// numbers.splice(index, 1);
// console.log("test1", numbers);
// numbers.filter((value,index)=>{
//   if(value === position){
//     console.log(index);

//   }
// console.log(index);
// console.log("test", numbers);

// })
// }
//   numbers.reduce((total, num, index, arr) => {
//     // console.log(total, num, index, arr);
//     if (arr.indexOf(position) == index) {
//       console.log(index,num);
//     }
//   });
// }
//   numbers.map((value, index, arr) => {
//     if (value === position) {
//       console.log(index);
//     }
//     // if(arr.indexOf(position)==index){
//     //   console.log(value,index);

//     // }
//   });
// }
//  numbers.find((value,index,arr)=>{

//   if(value === position){
//     console.log(index,value);

//   }
//  })

// }

//====dsa 5

// const array1 = [3, 8, 12, 5, 9];
// const array2 = [20, 14, 9, 27, 15];
//  let finalArr = [];

// let finalArr = array1.map((item, index) => {
//   return [item, array2[index]];
// });
// let finalArr = Array.from([...array1, ...array2]);

// Array.prototype.push.apply(finalArr, array1);
// Array.prototype.push.apply(finalArr, array2);
// finalArr.concat(array1, array2);
// for (let i = 0; i < array1.length; i++) {
//   finalArr[i] = array1[i];
// **  finalArr.push(array1[i]);
// }
// for (let i = 0; i < array2.length; i++) {
//   finalArr.push(array2[i]);

//   finalArr[array1.length + i] = array2[i];
// }

// console.log("finalArr", finalArr);

//==== dsa 6
// const array1 = [3, 5, 8, 9, 12];
// const array2 = [9, 14, 15, 20, 27];
// let final = [];

// let d1 = 0;
// let d2 = 0;
// let d3 = 0;
// while (d2 < array2.length && d1 < array1.length) {
//   if (array2[d2] < array1[d1]) {
//     final[d3] = array2[d2];
//     d2++;
//   } else {
//     final[d3] = array1[d1];
//     d1++;
//   }
//   d3++;
// }
// while (d2 < array2.length) {
//   final[d3] = array2[d2];
//   d2++;
//   d3++;
// }
// console.log(final);

//==== dsa 7

// const numbers = [23, 5, 18, 42, 7, 11, 29, 3, 35, 16, 9, 27, 4, 31, 19];
// for (let i = 0; i < numbers.length; i++) {
//   // let swapped = false;
//   for (let j = 0; j < numbers.length; j++) {
//     // console.log(numbers);

//     if (numbers[j] > numbers[j + 1]) {
//       // let swap = numbers[j + 1];
//       // numbers[j + 1] = numbers[j];
//       // numbers[j] = swap;
//       // swapped = true;
//       // console.log(numbers);
//       [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
//     }
//   }
//   // if (!swapped) break;
// }
// console.log(numbers);

//=== dsa 8

// const numberToBeFactorize = 5;

// console.log(numberToBeFactorize, typeof numberToBeFactorize, "function");
// const numbers = [23, 5, 18, 42, 7, 11, 29, 3, 35, 16, 9, 27, 4, 31, 19];
// let factorizeArr = [];
// // let value = 1;

// const factorize = (num) => {
//   if (num > 10 || typeof num !== "number" || num < 1) return 1;
//   return num * factorize(num - 1);
// };

// for (let i = 0; i < numbers.length; i++) {
//   factorizeArr.push(factorize(numbers[i]));
// }

// console.log(factorizeArr);

// function test(x) {
//   console.log(x, "up");
//   if (x > 0) {
//     console.log(x, "if-up");
//     test(x - 1);
//     console.log(x, "if-down");
//   }
//   console.log(x, "down");
// }
// let x = 5;
// test(x);

// let arr = [3, 8, 12, 17, 25]
// let  value = 10;
// let position = 2;
// for(let i=arr.length-1;i>=position;i--){
//   arr[i+1]=arr[i]
// if(i === position){
//   // let swap = arr[i]
//   arr[i] = value
//   console.log("ig");

// }
// console.log("test");

// // console.log(arr);
// }
// console.log(arr);
// let arr2 = [5, 15, 20, 30];

// let valueToInsert2 = 25;

// let position2 = 3;
// for(let i=arr2.length-1;i>=position2;i--){
//   arr2[i+1] = arr2[i]
//   if(i== position2){
//     arr2[i] = valueToInsert2
//   }
// }

// console.log(arr2);

// let arr3 = [1, 2, 3, 4, 5]; // initial array

// let valueToInsert3 = 6; // value

// let position3 = 5; // position (Inserting at the end)
// //solution
// // for(let i=arr3.length-1;i>=position3;i--)
// // {
// //   // arr3[i+1]=arr3[i]
// //   if(i == position3){
// //     arr3[i]=valueToInsert3;

// //   }
// // }
// let length = 6;
// arr3.length = length;
// arr3[arr3.length - 1]=valueToInsert3
// console.log(arr3);

//==== dsa 9

// console.time("reversal time");
// const numbers = [23, 5, 18, 42, 7, 11, 29, 3, 35, 16, 9, 27, 4];
// let start = 0;
// let end = numbers.length - 1;
// while (start < end) {
//   [numbers[start], numbers[end]] = [numbers[end], numbers[start]];
//   start++;
//   end--;
// }
// console.log(numbers);
// console.timeEnd("reversal time");

//dsa 10 stack,stack Pop Push

// const stack = [];
// let currentLength = stack.length;
// let maxLength = 5;

// const push = (value) => {
//   if (currentLength < maxLength) {
//     stack[currentLength] = value;
//     currentLength += 1;
//   } else {
//     alert("Stack is full. you can not add " + value);
//   }
// };
// const pop = () => {
//   if (currentLength > 0) {
//     currentLength -= 1;
//     stack.length = currentLength;
//   } else {
//     alert("Stack is empty.");
//   }
// };

// // testCases
// push(20);
// push(30);
// pop();
// pop();

// push(245);
// push(232);
// push(3);
// push(33);
// push(53);

// console.log(stack);

// dsa 11 Stack Pop and Push with DOM Inputs and buttons

// const stack = [];
// let currentLength = stack.length;
// const maxLength = 5;

// const push = () => {
//   let input = document.getElementById("stackElement");
//   const value = Number(input.value);

//   if (!Number(value)) {
//     alert("Please enter a number");
//     input.value = "";
//   } else if (currentLength < maxLength) {
//     stack[currentLength] = value;
//     currentLength += 1;
//     console.log(stack);
//     input.value = "";
//   } else {
//     alert(`Stack is full. You cannot add ${value}`);
//     input.value = "";
//   }
// };

// const pop = () => {
//   if (currentLength > 0) {
//     currentLength -= 1;
//     const poppedValue = stack[currentLength];
//     stack.length = currentLength;
//     alert(`${poppedValue} has been removed from [${stack}]`);
//   } else {
//     alert("Stack is empty can't pop");
//     return null;
//   }
// };
// const display = () => {
//   alert(`[${stack}]`);
// };
// console.log(stack);

//==== dsa 10 reverse strings by using stack

const reverseArrayOfString = () => {
  const strings = ["apple", "banana", "cherry", "date", "elderberry"];
  const stack = [];
  let stackLen = stack.length;

  const push = (value) => {
    stack[stackLen] = value;
    stackLen += 1;
  };

  const pop = () => {
    stackLen -= 1;
    const poppedValue = stack[stackLen];
    stack.length = stackLen;
    return poppedValue;
  };

  for (let i = 0; i < strings.length; i++) {
    let string = strings[i];

    let poppedString = "";

    for (let char of string) {
      push(char);
    }
    while (stackLen > 0) {
      poppedString += pop();
    }
    strings[i] = poppedString;
  }
  return strings;
};

console.log(reverseArrayOfString());
