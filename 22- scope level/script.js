function one() {
    const username = "Faizan"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    // two()
}
one()

if (true) {
    const username = "Faizan"
    if (username === "Faizan") {
        const website = " youtube"
            // console.log(username + website);

    }
    // console.log(website);

}
// console.log(username);


// MINI HOISTING >

console.log(addone(16))

function addone(num) {
    return num + 1
}

addtwo(15)

const addtwo = function(num) {
    return num + 2
}