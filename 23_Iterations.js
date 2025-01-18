// FOR LOOP 

// for (let i=1 ; i<=10 ; i++) {
//     const element = i
//     console.log(element);
    
    
// }

// for(let i =0 ; i<=5 ; i++){
//     for(let j=i ; j=i+1 ;j++)
//     {
//         //console.log("*");
        
//     }
// }

let myArray = ["Superman" , "Batman" , "Flash"]
console.log(myArray.length);


for (let i = 0; i <= myArray.length; i++) {
    const Superheroes = myArray[i]
    
 //console.log(Superheroes);
    
}


// break and continue 

for (let index = 1; index <=20; index++) {

    if (index == 5) {
    console.log("5 is the best");
    //break
    //continue
    }
   console.log(`Value of i is ${index}`);
   
    
}