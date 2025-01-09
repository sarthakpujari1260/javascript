 function Mymane(){
    console.log("S");
    console.log("A");
    console.log("R");
    console.log("T");
    console.log("H");
    console.log("A");
    console.log("K");
 }

//  Mymane()     Printing of a function. 




//  function Add2Numbers (number1 , number2){
//     console.log(`Your sum is ${number1 + number2}`); 
// }



function Add2Numbers (number1 , number2){
   const result = number1+number2
   return result
    
}
const result = Add2Numbers(3,5)

// console.log("RESULT IS ",result)


function loginmessage (username){

if(username=== undefined){
console.log("ENTER YOUR NAME ");
return
}
else{
    console.log(`${username} just logged in.` );   
}
}
console.log(loginmessage("SARTHAK"));
