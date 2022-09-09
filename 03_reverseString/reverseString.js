const reverseString = function (str) {
    let gago = "";
    for (let i = str.length - 1; i >= 0; i--) {
        gago += str[i];
    }
    return gago;
};

// Do not edit below this line
module.exports = reverseString;
