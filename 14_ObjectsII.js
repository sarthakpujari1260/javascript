// Objects declaring using Constructor (SINGLE LITERAL)


const Tinder = {

id: 19080,
name : "Sarthak",
IsLoggedIn : false

}

//console.log(Tinder);

const regularUser = {
    email:"user@gmail.com",
    fullname :{
        userfullname:{
            firstname:"Sarthak",
            lastname:"Pujari"
        }
    }
}

//console.log(regularUser.fullname.userfullname.lastname);


const object1 = {
    1:"a",
    2:"b"
}
const object2={
    3:"a",
    4:"b"
}

// Object.assign()  used to merge or add 2 or more objects.

//const object3 = Object.assign(object1 , object2)



//SPREAD OPEERATOR
const object3 = {...object1 , ...object2}  
//console.log(object3);



const mac = [
    {
        id : 1,
        name : "Sarthak",
        age : 20,
    },
    {
        id : 2,
        name : "Vishal",
        age : 20,
    }
]

//console.log(mac[1].name);  // Syntax to get info from objects in an Array.

//console.log(Tinder);
//console.log(Object.keys(Tinder ));


