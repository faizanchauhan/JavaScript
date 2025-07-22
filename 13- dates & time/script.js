// DATES

let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// let myCreatedDate = new Date(2004, 0, 24)
// console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date(2004, 0, 24, 5, 3)
    // console.log(myCreatedDate.toLocaleString());

let anyDate = new Date("2003-05-17")
    // console.log(anyDate.toLocaleString());

let myTimeStamp = Date.now()
    // console.log(myTimeStamp);

// console.log(anyDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()
    // console.log(newDate);
    // console.log(newDate.getMonth() + 1);
    // console.log(newDate.getDate());

newDate.toLocaleString('default', {
    weekday: "long"
})