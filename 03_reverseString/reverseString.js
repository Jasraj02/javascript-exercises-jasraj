

// split string into an array
// rearrange the array backwards (may need a for loop)
// rejoin the array into a string


const reverseString = function(inputString) {
    var stringArray = inputString.split("");
    stringArray.reverse();

    return stringArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
