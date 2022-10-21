
const getTheTitles = function(books) {
    let newArray=[];
  for (let index in books){
    //for (let index = 0; index< books.length; index++){
   newArray.push(books[index].title);
  };
 return newArray;
};


// Do not edit below this line
module.exports = getTheTitles;
