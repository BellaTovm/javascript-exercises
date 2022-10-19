const add = function(a,b) {
  if(a===0 && b===0){
    return 0;
  }
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
//[1,25,34,4], 5, 20

  // let sum  = 0 ;
	// for (let i=0 ; i<= arr.length-1 ; i++){
  //     sum += arr[i];
  // }
  // return sum;

const initialValue = 0;
const sumWithInitial = arr.reduce(
  function(previousValue, currentValue) {return previousValue + currentValue},
  initialValue
);
return sumWithInitial;
};



const multiply = function(array) {
  let sum =1;
  for (let i=0 ; i<= array.length-1 ; i++){
     sum *= array[i];
    }
    return sum;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

//sxala kirac infinit loop a n = 0 
const factorial = function(n) {
	if (n===0){
    return 1;
  };
  let sum =1 ;
  for (i=n ;i>1 ;i--){
     sum = sum*(i);
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
