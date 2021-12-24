// Write code to return the the number of vowels in `str`

// var vowelCount = function(str) {
//     let count = 0;
//     let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//     let letters = str.split('');
//     for (let i = 0; i < letters.length; i++) {
//         if (vowels.indexOf(letters[i]) >= 0) {
//             count += 1;
//         }
//     }
//     return count;
// };

var vowelCount = function(str) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let letters = str.split('');
    letters.forEach(x => vowels.indexOf(x) >=0 ? count += 1 : count)
    return count;
};