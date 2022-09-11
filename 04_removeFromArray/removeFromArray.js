
const removeFromArray = function (inputArray, ...args) {

    if (!(inputArray instanceof Array)) {
        throw new Error('Invalid argument type, expecting array');
    }
    if (args.length === 0 || inputArray.length === 0) {
        return inputArray;
    }
    const retArr = [];
    for (let i = 0; i < inputArray.length; i++) {
        console.log(inputArray.length);
        const element = inputArray[i];

        // whether we need to include this value in return array 
        let includeElementInReturnArray = true; 
        for (let j = 0; j < args.length; j++) {
            console.log(args[j] ,  element);
            if (args[j] === element) {
                includeElementInReturnArray = false;
                // inputArray.splice(i, 1);
            }
        }
        if(includeElementInReturnArray){
            retArr.push(element);
        }

    }
    return retArr;
}




// example  [1,2,3,4],7,4,2,54,76,77, -1 output [1,3]
 

// Do not edit below this line
module.exports = removeFromArray;
