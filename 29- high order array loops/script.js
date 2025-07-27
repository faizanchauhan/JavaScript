// for of loop (perhaps for arrays)

const arr = [1, 2, 3, 4, 5]

for (const val of arr) {
    console.log(val);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}


//Map; values unique hongi and jis order m enter kro ussi m rahengi

const map = new Map()
map.set('In', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")
map.set('In', "India")


// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);

}