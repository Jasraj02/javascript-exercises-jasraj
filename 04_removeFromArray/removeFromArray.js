const removeFromArray = function() {
    const originalArray = arguments[0];
    const removalArray = [];

    // add removal values to an array
    for (let i=1; i < arguments.length; i++) {
        removalArray.push(arguments[i])
        }
    
    for (value of removalArray) {
        while (originalArray.indexOf(value)!==-1) {const index = originalArray.indexOf(value)
            const x = originalArray.splice(index,1);};
    }

    return originalArray
    }
;



// Do not edit below this line
module.exports = removeFromArray;
