const fibonacci = function(n) {
    let arr =[1,1];
    if (n<0){
        return "OOPS";
    }
  
    for(let i=2; i<=n; i++){
        
     arr[i] = arr[i-1] + arr[i-2] ;
    }
return arr[n-1];



/*const initialValue = 0;
const sumWithInitial = arr.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);*/

};

// Do not edit below this line
module.exports = fibonacci;
