const findTheOldest = function (array) {
    // const oldest = array.reduce((previousValue, currentValue) => {
    //     if (!currentValue.yearOfDeath) {
    //         currentValue.yearOfDeath = new Date().getFullYear();
    //     }
    //     if (!previousValue.yearOfDeath) {
    //         previousValue.yearOfDeath = new Date().getFullYear();
    //     }
    //     if ((previousValue.yearOfDeath - previousValue.yearOfBirth) > (currentValue.yearOfDeath - currentValue.yearOfBirth)) {
    //         return previousValue;
    //     }
    //     return currentValue;
    // })

    // return oldest;

    let maxAge = 0;
    let returnObject;
    for (let i = 0; i < array.length; i++) {
        let mard = array[i];
        if (!mard.yearOfDeath) {
            mard.yearOfDeath = new Date().getFullYear();
        }
        const age = mard.yearOfDeath - mard.yearOfBirth;
        if (age > maxAge) {
            returnObject = mard;
            maxAge = age;
        }
    }
    return returnObject;
};

// const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1942,
//       yearOfDeath: 1970,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//     {
//         name: "Jane",
//         yearOfBirth: 1912,
//       },
//       {
//         name: "Jane",
//         yearOfBirth: 1912,
//         yearOfDeath: 1941,
//       },
//       {
//         name: "Jane",
//         yearOfBirth: 1912,
//         yearOfDeath: 1941,
//       },
//       {
//         name: "Jane",
//         yearOfBirth: 1912,
//         yearOfDeath: 1941,
//       },
//   ];

//   findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
