function sayMyName() {
    console.log("F");
    console.log("A");
    console.log("I");
    console.log("Z");
    console.log("A");
    console.log("N");
}

// sayMyName() //function execution

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

// addTwoNumbers(17, 24)

// const result = addTwoNumbers(17, 24)
// console.log("result: ", result);


function addTwoNumbers(number1, number2) {

    // let resultt = number1 + number2
    // return resultt
    return number1 + number2
}

const resultt = addTwoNumbers(17, 24)
    // console.log("Result: ", resultt);

function loginUserMessage(username) {
    return `${username} just logged in`
}

// console.log(loginUserMessage("Faizan"));

function married(name = "chauhan") {
    if (name === undefined) {
        console.log("PLease Enter a Name");
        return
    }
    return `${name} is not married`
}

// console.log(married("faizan"));

console.log(married());