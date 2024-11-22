//* ---------------------------------------------------------
//*1: Programming Question: Longest Word in a String
//* ---------------------------------------------------------

//? Q: Write a function findLongestWord that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.

//* Constraints:
//? The input string may contain alphabetic characters, digits, spaces, and punctuation.
//? The input string is non-empty.
//? The input string may contain multiple words separated by spaces.

//* Note:
//? If the input string is empty or contains only whitespace, the function should return an false.
//? The function should ignore leading and trailing whitespace when determining the longest word.
// const findLongestWord = (s) => {
//   if (s.trim().length === 0) {
//     return false;
//   }
//   let arr = s.split(" ");
//   let longest = "";
//   let len = 0;
//   for (let i of arr) {
//     if (i.length > len) {
//       len = i.length;
//       longest = i;
//     }
//   }
//   return longest;\
//   arr = arr.reduce((acc, curr) => (curr.length > acc.length ? curr : acc));
//   return arr;
// };
// console.log(
//   findLongestWord(
//     "Watch Thapa Technical javascript awesomethapatechnical course on youtube"
//   )
// );

//*-------------------------------------------
//* 2: Programming Question: Hash Tag Generator
//*-------------------------------------------
//? You are required to implement a function generateHash that generates a hash tag from a given input string. The hash tag should be constructed as follows:
//? The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.
//? If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false.
//? Otherwise, the function should return the generated hash tag prefixed with #.
//* Write a function generateHash to accomplish this task.
// const generateHash = (str) => {
//   if (str.trim().length === 0 || str.length > 280) return false;
//   let tag = "#";
//   str = str.split(" ");
//   // for (let word of str) {
//   //   word[0].charAt(0).toUpperCase();
//   //   console.log(word);
//   str = str.map((curr) => curr.replace(curr[0], curr[0].toUpperCase()));

//   return tag + str.join("");
// };

// console.log(generateHash("my name is thapa technical"));

//*---------------------------------------------------------
//*  Interview Question: Count Occurrences of Character
//*---------------------------------------------------------

//! Task:
//? Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.

// const countChar = (word, char) => {
//   let regex = new RegExp(char, "gi");
//   let matched = word.match(regex);
//   console.log(matched);

//   return matched.length;
// };

// console.log(countChar("MissIssippi", "I")); // Output: 4

//todo Constraints:
//? The function should be case-sensitive.
//? The function should handle both lowercase and uppercase characters.
//? The character parameter can be any printable ASCII character (the function should accept any character that is part of the ASCII character set and is printable).

//---------------------------------------------------------------------

//*---------------------------------------------------------
//*  Interview Question:
//*---------------------------------------------------------
//? Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle: "equilateral", "isosceles", or "scalene".

// const checkTriangleType = (a, b, c) => {
//   let triangle = "";
//   if (a === b && b === c) {
//     triangle = "equilateral";
//   } else if (a === b || a === c || b === c) {
//     triangle = "isosceles";
//   } else {
//     triangle = "scalene";
//   }
//   return triangle;
// };

// console.log(checkTriangleType(3, 3, 3)); // Output: "equilateral"
// console.log(checkTriangleType(3, 4, 3)); // Output: "isosceles"
// console.log(checkTriangleType(5, 8, 6)); // Output: "scalene"

//todo The function should adhere to the following rules:
//? If all three sides are of equal length, return "equilateral".
//? If only two sides are of equal length, return "isosceles".
//? If all three sides have different lengths, return "scalene".
//------------------------------------------------------------

//*-------------------------------------------
//*  Programming Question: Sort an Array
//*-------------------------------------------
// ? Write a function to sort an array of numbers in an ascending order.
// const sortAscending = (arr) => {
//   arr.sort((a, b) => a - b);
//   return arr;
// };
// Example usage:
// console.log(sortAscending([5, 3, 1, 8])); // Output: [1, 3, 5, 8]
// console.log(sortAscending([5, 3, 10, 8])); // Output: [3, 5, 8,10]
//todo Requirements:
//? The function should take an array of numbers as input.
//? It should return a new array with the numbers sorted in ascending order.
//? The original array should remain unchanged.
//? You are not allowed to use the built-in sort() method.
// Note
//// Without a comparator function, the sort method sorts the array elements as strings by default, which might not always yield the correct numeric sorting, especially for numbers with more than one digit

//*-------------------------------------------
//*  Programming Question: Check a palindrome
//*-------------------------------------------
// ? Write a function to determine whether a given string is a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characrters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.
const isPalindrome = (str) => {
  str = str.toLowerCase();
  str = str.replace(/[\s.,!?;:'"-]+/g, "");
  let reverse = str.split(" ").reverse().join("");
  //   console.log(reverse);

  if (reverse === str) return true;
  return false;
};
// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
//-------------------------------------------
//  Contraints
//-------------------------------------------
// The input string may contain letters, digits, spaces punctuation, and special characters.
// The function should be case-insensitive, meaning "Racecar" and "racecar" should be considered the same.
//Ignore spaces, punctation and special character when determing if a string is a palindrome.
// the function should return true if the input string is a palindrome and false otherwise
//// Without a comparator function, the sort method sorts the array elements as strings by default, which might not always yield the correct numeric sorting, especially for numbers with more than one digit
