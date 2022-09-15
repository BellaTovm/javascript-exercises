const ftoc = function(far) {
let cels;
cels= (far-32)* (5/9);
cels= Number(cels.toFixed(1));
return cels;
};
// console.log(ftoc(32))

const ctof = function(cels) {
  let far;
  far =  (cels * 9/5) + 32 ;
  far = Number(far.toFixed(1));
  return far;

};
// console.log(ctof(54));
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
