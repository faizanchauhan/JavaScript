//STACK(PRIMITIVE) original nai copied value change hoti hai
let myCompanyName = "fayinc"

let anotherName = myCompanyName

anotherName = "faeeinc";

console.log(myCompanyName);
console.log(anotherName);

//HEAP(NON-PRIMITIVE) original value change hoti hai

let userOne = {
    email: "fayzanchouhan@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.upi = "faizan@ybl"

// console.log(userOne.upi);
// console.log(userTwo.upi);
console.table([userOne.upi, userTwo.upi])


// let faizanOne = "FaizanChauhan"
// let faizanTwo = faizanOne
// faizanTwo = "faizanShabbir"

// console.log(faizanOne);
// console.log(faizanTwo);

// let user = {
//     userName: "chauhan",
//     email: 'faizan@gmail.com'
// }

// users = user
// users.userName = "faizan"

// console.log(user.userName);
// console.log(users.userName);