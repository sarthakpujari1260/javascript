const marvelheores =["spiderman","thor","ironman"]
const DCheroes = ["superman","batman","flash"]

//concat joins two or more arrays
const superheroes = marvelheores.concat(DCheroes)
//console.log(superheroes); 



// flat is used to coverts multiple arrays under arrays in one array . (depth = infinity).
const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherarray = anotherArray.flat(Infinity)
//console.log(realAnotherarray);


//check whether its an array or not (T/F)
console.log(Array.isArray("sarthak"));

//make arrays from strings
console.log(Array.from('SARTHAK'));


let score1 =900
let score2 = 30
let score3 = 50
//converting differnt elements in form of an array
console.log(Array.of(score1,score2,score3));
