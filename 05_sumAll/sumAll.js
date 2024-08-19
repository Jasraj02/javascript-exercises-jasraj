
// check to see if both inputs are positive
// find smallest integer input 
// make for loop that starts at lowest integer and ends at largest integer


const sumAll = function(num1,num2) {
    // check for invalid inputs 
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2) ) {
        return 'ERROR'
    }
    
    let integerSum = (small,large) => {
        var sum = 0
        for (let i = small; i <=large; i++) {
            sum += i
        }
        return sum;
    }

    if (num1 >= num2) {
        return integerSum(num2,num1)
    }
    else {
        return integerSum(num1,num2)
    }

};

// Do not edit below this line
module.exports = sumAll;
