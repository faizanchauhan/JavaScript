const mySym = Symbol("myKey1")

const jsUSer = {
    name: "faizan",
    "full name": "faizan chauhan",
    [mySym]: "myKey1",
    email: "fayzanchauhan@gmail.com",
    age: 19,
    location: "islamabad",
    isLoggedIn: false,
    lastLoginDays: ["monday", "friday"],
}

// console.log(jsUSer.location);
// console.log(jsUSer["email"]);
// console.log(jsUSer["full name"]);
// console.log(jsUSer[mySym]);

jsUSer.email = "faiizanchauhan@google.com" //change

// Object.freeze(jsUSer) //can,t be changed after it
jsUSer.email = "faiizanchauhan@ms.com"

console.log(jsUSer);

jsUSer.greeting = function() {
    console.log("hello JS user");
}


jsUSer.greetingTwo = function() {
    console.log(`hello JS user, ${this.name}`);

}

console.log(jsUSer.greeting());
console.log(jsUSer.greetingTwo());