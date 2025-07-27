let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map((hie) => hie + 10)

const newNums = myNums
    .map((hey) => hey * 10)
    .map((hey) => hey + 1)
    .filter((hey) => hey >= 40)

// console.log(newNums);


//======================  REDUCE  ========================

const MyNumbs = [1, 2, 3]
    // const total = MyNumbs.reduce(function(accumulator, currentvalue) {
    //     console.log(`acc: ${accumulator} and ${currentvalue} `);
    //     return accumulator + currentvalue
    // }, 0)
    // console.log(total);

const myTotal = MyNumbs.reduce((acc, curr) => acc + curr, 0)
console.log(myTotal);


const shoppingCart = [{
    itemName: "JS course",
    price: 2999
}, {
    itemName: "Py course",
    price: 999
}, {
    itemName: "Mobile dev course",
    price: 5999
}, {
    itemName: "data science course",
    price: 12999
}]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);