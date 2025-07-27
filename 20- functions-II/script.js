function calculateCartPrice(...num1) {
    return num1
}

//rest operator(...num1)
// console.log(calculateCartPrice(200, 400, 500, 6000, 3000, 567));

const user = {
    username: "Faizan",
    prices: 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
        username: "touqeer",
        price: 344
    }) //aise b object pass kr skte hn

const myNewArray = [23, 45, 67, 89]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([23, 45, 67, 89]));


// PRACTICE


const myobject = {
    name: "faizan",
    age: 19
}

function getValue(fromobject) {
    console.log(`name is ${fromobject.name} and age is ${fromobject.age}`);
}

getValue(myobject)


const anArray = [55, 6, 7, 8]

function returnThirdValue(passArray) {
    return passArray[2]
}

console.log(returnThirdValue(anArray));