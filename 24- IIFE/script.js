(function chai() {
    console.log(`DB CONNECTED`);
})(); //named IIFE


((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Faizan')