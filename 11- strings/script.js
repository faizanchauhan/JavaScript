const name = "Faizan"
const repoCount = 70

console.log(name + repoCount + " Value");

console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('faizan-fsc-com')

console.log(gameName[5]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(6));
console.log(gameName.indexOf("f"));

const newString = gameName.substring(0, 6)
console.log(newString);

const anotherString = gameName.slice(-5, 6)
console.log(anotherString);

const newStringOne = "      faizan      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://faizan.com/faizan%20chauhan"
console.log(url.replace('%20', '-'));

console.log(url.includes('faizan'));

console.log(gameName.split('-'));