const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async task is complete')
        resolve()
    }, 1000)
})

promiseOne.then(function() {
    console.log('promise consumed');
})

//////////////////////////////////////////////////////////

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("async 2 completed");
        resolve()
    }, 1000)
}).then(function() {
    console.log("promise 2 consumed");
})

///////////////////////////////////////////////////////////

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({ username: "faizan", email: "faizan@gmail.com" })
    }, 1000)
})

promiseThree.then(function(user) {
    console.log(user)
})

////////////////////////////////////////////////////////////

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false
        if (!error) {
            resolve({ username: 'fifuu', email: 'afifamir56@gmail.com' })
        } else {
            reject('ERROR: Something went Wrong')
        }
    }, 1000)

})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error) {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

/////////////////////////////////////////////////////////////////

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if (!error) {
            resolve({ username: 'afifa', email: 'afifamir56@gmail.com' })
        } else {
            reject('ERROR: language went Wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()