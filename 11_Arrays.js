//arrays in javascripts are resizable.
// 0 base indexing
//arrays makes shallow copies (properties share same reference point)

const myArray = [ 0,1,2,3,4,5,true,"sarthak"]
console.log(myArray);
//console.log(myArray[7]);


const heroes = ["SPIDERMAN" , "SUPERMAN"]
const newArr = new Array(1,2,3,4,5)
//console.log(newArr);


// METHODS IN ARRAY

//myArray.push(7,8,9)   //PUSH => adds values in array
//console.log(myArray);

//myArray.pop()   // POP => pops out last value in an array
//console.log(myArray );

 
//console.log(myArray.includes('sarthak'));              // finding element


//console.log(myArray.indexOf(4));    //tells position of element


//const newArray = myArray.join()  //=> coverts to Strings


// SPLICE => manipulates the original array and remove its portion.

// SLICE => opposite 