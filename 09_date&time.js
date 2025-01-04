// Dates are object in a javascript

let myDate = new Date()
//console.log(myDate.toString());           //date and   time both with GMT

//console.log(myDate.toDateString());       //only date

//console.log(myDate.toLocaleString());     //date and time wihtout GMT


//months starts with 0 => jan  
let myCreateddate = new Date(2025,0,23)
//console.log(myCreateddate.toLocaleString());

let myTimestamp = Date.now()
//console.log(myTimestamp);

//console.log(myCreateddate.getTime());
//console.log(Math.floor(myTimestamp/1000));

let newDate = new Date()
console.log(newDate.getDay());




