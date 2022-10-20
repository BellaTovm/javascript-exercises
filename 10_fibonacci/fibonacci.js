const fibonacci = function(n) {
    let arr =[1,1];
    if (n<0){
        return "OOPS";
    }
  
    for(let i=2; i<=n; i++){
        
     arr[i] = arr[i-1] + arr[i-2] ;
    }
return arr[n-1];



/*
let arr = [1,1]
function fib (n){
  let  pIndex = 1;
  let  cIndex = 1; 
    let mainIndex = 2; 
    const arr = [1,1];
    while(mainIndex<n){
        let tmp = cIndex; 
        cIndex =  cIndex + pIndex; 
        pIndex = tmp;
        console.log(cIndex,pIndex);
        arr.push(cIndex);
        console.log(arr);
        mainIndex++; 
    }

    return cIndex;


    
}
*/

};

// Do not edit below this line
module.exports = fibonacci;
