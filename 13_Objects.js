// Singleton only from Constructors

//Object Literals

const Mysym = Symbol("key1")

const jsUser = {

    Name : "Sarthak",
    "Full Name": "Sarthak Pujari",
    class : "A",
    SapId : 19080,
    Age : 20,
    [Mysym] : "Mykeys1",  // for symbol use [] braces 
    IsLoggedIn : false,
    LastLogin : ["Monday" , "Sunday"]
}
//console.log(jsUser.Name);
//console.log(jsUser["Full Name"]);
//console.log(jsUser[Mysym]);

jsUser.Name = "MACBOOK"

//Object.freeze(jsUser)  // NO CHANGES WILL BE MADE AFTER FREEZE

jsUser.Name = "Sarthak"

//console.log(jsUser);


jsUser.greeting =  function(){
    console.log("Hello JS User");
    
}

//console.log(jsUser.greeting);

jsUser.GetName = function(){
    console.log(`My name is ${this.Name}`);
    
}
console.log(jsUser.GetName());
