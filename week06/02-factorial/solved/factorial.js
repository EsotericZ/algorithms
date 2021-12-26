// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
    let newn = 1;
    for (let i = 1; i < num+1; i++) {
        newn = newn*i;
    }
    return newn
};