//  PART  -  02

const marvel_heroes = ["spiderman", "thor", "ironman"]
const dc_heroes = ["superman", "flash", "batman"]

marvel_heroes.push(dc_heroes)
    // console.log(marvel_heroes);
    // console.log(marvel_heroes[3][1]);

const all_new_heros = [...marvel_heroes, ...dc_heroes]
    // console.log(all_new_heros); //spread operator, not working

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realArrray = another_array.flat(Infinity)
console.log(realArrray);


console.log(Array.isArray("faizan")); //puchna k array hai ya nai
console.log(Array.from("faizan")); //array bna deta hai
console.log(Array.from({ name: "faizan" }));

let score1 = 100
let score2 = 300
let score3 = 200

console.log(Array.of(score1, score2, score3));