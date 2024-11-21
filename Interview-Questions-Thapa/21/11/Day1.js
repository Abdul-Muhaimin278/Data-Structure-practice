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
// --------------------------------------------------------------------------
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

//------------------------------------------------------------------
//*---------------------------------------------------------
//*  Interview Question: Count Occurrences of Character
//*---------------------------------------------------------

//! Task:
//? Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.

const countChar = (word, char) => {
  // let count = 0;
  let regex = new RegExp(char, "gi");
  let matched = word.match(regex);
  console.log(matched);

  // if (word.includes(/char/gi)) {
  //   count++;
  // }
  return matched.length;
};

console.log(countChar("MissIssippi", "I")); // Output: 4

//todo Constraints:
//? The function should be case-sensitive.
//? The function should handle both lowercase and uppercase characters.
//? The character parameter can be any printable ASCII character (the function should accept any character that is part of the ASCII character set and is printable).
