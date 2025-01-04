//2 types of memories 
// primitive (stack) and non primitive (heap) memory 


let myYoutube = "Sarthakpujari.com"
let anotherName = myYoutube

anotherName = "jhonny"
console.log(anotherName);



let user1 = {
    name:"mac",
    age:20,
    country:"india",
} 

let user2 = user1

user2.name = "sarthak";

console.log(user1.name);
console.log(user2.name);

