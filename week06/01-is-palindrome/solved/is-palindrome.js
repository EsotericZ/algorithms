// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

// var isPalindrome = function(str) {
//     let next = str.split('').reverse().join('');
//     if (str === next) {
//         return true;
//     } else {
//         return false;
//     }
// };

let isPalindrome = str => str === str.split('').reverse().join('') ? true : false;