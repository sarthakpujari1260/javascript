const user = {
    username : "Sarthak",
    price : 999,
    
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to the website`);
        
    }

}
// user.welcomeMessage();


 // Old value is updated (It becomes the current context)
user.username = "MAC"

 
// user.welcomeMessage()


const user1 = {
    price : 999,
    Messsage : function(){
     console.log(`The price of the object is ${this.price}`);
    }
}
 user1.price = 800 // Value is overwritten
//user1.Messsage()



// THIS can only be used in an onject.


// Remove function and add => after the ()
// It becomes an " ARROW FUNCTION "

const chai = () => {
    let usernamee = "MAX"
    console.log(usernamee);
    
    
}
// chai()

// Arrow Function    name =() => {}

const addtwo = (num1,num2) => {
    return num1+num2
 }
 console.log(addtwo(5,3));
 