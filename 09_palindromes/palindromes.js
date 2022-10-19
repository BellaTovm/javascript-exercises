// const palindromes = function (word) {

// let w = word.replace(/[^\w\s\']|_/g, "")
// .replace(/\s+/g, "").toLowerCase();

// let reverse = '';
// for (let i =  w.length - 1; i >= 0; i--) { 
//     reverse +=  w[i]; // or newString = newString + str[i];
// }
// console.log(w, reverse);
// console.log(w == reverse);
// return  (w === reverse);
// };


const palindromes = function (word) {

    
    // racecar
    const wl = w.length;
    let mid = wl/2;
    let isPolinom = true; 
    for (let i =  0; i <=mid; i++) { 
        console.log(w[i],  w[wl-1-i])
        if(w[i] !== w[wl-1-i]){
           isPolinom = false; 
           break;
        }
    }
    return isPolinom
    };
    

// Do not edit below this line
module.exports = palindromes;
