const sumAll = function(a,b) {
if((typeof a !== "number") || (typeof b !== "number")){
   return "ERROR";
}

if ( a<0 || b<0) {
    return "ERROR"
}


if (a===b){
    let sum; 
    sum= a+b;
    return sum;
};



if (a<b){
    let sum = 0;
 for (let i=a; i<=b; i++){
   sum = sum + i;
 }

return sum;  
}


if (a>b){
    let sum=0;
    for (let i=b; i<=a; i++){ 
        sum= sum + i;
    }
    return sum;
} 
}
// console.log(sumAll(-2,3))


/*if (a<b){
let i=a;
let sum;
do {
    sum= i+(i+1);
} while (i<=b);
return sum;
}
} */


// Do not edit below this line
module.exports = sumAll;
