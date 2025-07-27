const user = {
    username: "Faizan",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Touqeer"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "Faizan"
//     console.log(this.username);

// }

// chai() //function k andar use na hota;just object k andar this use hota

// const chai = function() {
//     let username = "Faizan"
//     console.log(this.username);
// }

// chai()

//   ARROW FUNCTION

const chai = () => {
    let username = "Faizan"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } //explicit return

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2) //implicit return

const addTwo = (num1, num2) => ({ name: "faizan" }) //object

//yeh 3 tareeqe hain arrow function likhne k; last wala react m bhut use hoga

console.log(addTwo(6, 7));