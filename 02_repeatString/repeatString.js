const repeatString = function(string,num) {
    let dat ="";
    
    if(num<0){
        return 'ERROR';
    }
    for (i=1; i<=num; i++){
       
        dat += string
    
    }
    return dat;
};



function intersect (arr1, arr2){
        const intersectArr  = [];

        for (let i = 0; i<arr1.length; i++){
            const arr1Element = arr1[i];
            for(let j = 0; j<arr2.length; j++){
                const arr2Element = arr2[j];
                if(arr1Element === arr2Element){
                    intersectArr.push(arr1Element);
                    continue;
                }
            }

        }


}

// Do not edit below this line
module.exports = repeatString;
