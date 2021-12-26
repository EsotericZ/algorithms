// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
    str = str.split(' ');
    for (let i =0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].slice(1);
    }
    str = str.join(' ');
    return str
};
