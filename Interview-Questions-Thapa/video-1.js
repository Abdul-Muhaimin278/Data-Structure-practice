//* ---------------------------------------------------------
//* Programming Question: Longest Word in a String
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
