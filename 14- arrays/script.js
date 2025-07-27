const myArray = [10, 1, 2, 3, 4, 5] // array declaration
const myHeroes = ["batman", "spiderman"]

const myArray2 = new Array(3, 5, 6, 7, 9)
console.log(myArray[0]);

// console.table([myArray])

// myArray.push(17)    //to add a new value at last
// myArray.pop()    //to remove last value

// myArray.unshift(24)   //to add a new value at start
// myArray.shift()    //to remove first value

// console.log(myArray.includes(7));
// console.log(myArray.indexOf(4));

const newArray = myArray.join() //adds array into a string
    // console.log(myArray);
    // console.log(typeof myArray);
    // console.log(newArray);
    // console.log(typeof newArray);

//slice, splice

console.log("A ", myArray);

const myN1 = myArray.slice(1, 3)
console.log(myN1);
console.log("B ", myArray);

const myN2 = myArray.splice(1, 3)
console.log("C ", myArray);
console.log(myN2);