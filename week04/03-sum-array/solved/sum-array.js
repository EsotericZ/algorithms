// Write code to add all the numbers in `arr` and return the total

// var sumArray = function(arr) {
//     let num = 0;
//     for (let i = 0; i < arr.length; i++) {
//         num = num + arr[i];
//     }
//     return num
// };


// var sumArray = function(arr) {
//     let num = 0;
//     for (let i = 0; i < arr.length; i++) {
//         num += arr[i];
//     }
//     return num
// };

var sumArray = function(arr) {
    let num = 0;
    arr.forEach(x => num += x);
    return num;
};