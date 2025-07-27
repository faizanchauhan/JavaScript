// const tinderUSer = new Object()
const tinderUser = {}

tinderUser.email = "chauhann"
tinderUser.id = "123abc"
tinderUser.name = "sammy"

// console.log(tinderUser);

const regularUser = {
        email: "ahahahaha",
        fullname: {
            userfullname: {
                firstname: "faizan",
                lastname: "chauhan"
            }
        }
    }
    // console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = Object.assign({}, obj1, obj2) //merge two objects

const obj3 = {...obj1, ...obj2 } //spread operator;yhi use krna hai
console.log(obj3);

console.log(Object.keys(tinderUser)) // keys chk krna 
console.log(Object.values(tinderUser)) //values chk krna 
console.log(Object.entries(tinderUser)) // array k andar array

console.log(tinderUser.hasOwnProperty('id')); //value exist krti h ya nai?