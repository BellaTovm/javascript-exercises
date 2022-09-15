const leapYears = function (years) {
    if (years %4 === 0 && !(years % 100 === 0 && years % 400 !== 0)){
        return true;
    } else {
        return false;
    }

    // if (years % 4 !== 0) {
    //     return false;
    // }

    // if (years % 100 === 0 && years % 400 !== 0) {
    //     return false;
    // }
    // return true;

}
// console.log(leapYears(1996))
// Do not edit below this line
module.exports = leapYears;
