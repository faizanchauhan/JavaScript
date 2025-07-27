//truthy and falsey; assume karlena k true h ya false

const userEmail = []

if (userEmail) {
    console.log("Got User Email");
} else {
    console.log("Don't have User Email");
}

// falsy values
// false, 0, -0, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}

//nullish coalescing operator(??): null, undefined

let val1;
// val1 = 5 ?? 10,
// val1 = null ?? 10

// console.log(val1);

//ternary operator

// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");