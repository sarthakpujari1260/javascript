let val1 = 10
let val2 = 5
function addnum(num1,num2){
 let total = num1+num2
 return total
}

let result1 = addnum(val1,val2)
let result2 = addnum(2,5)

//console.log(result1);   // here resu8lt is 15
//console.log(result2);   // here result is 7

function one() {
    console.log("ONE");
    two()
    
}
function two() {
    console.log("TWO");
    three()
    
}
function three() {
    console.log("THREE");
    
}

one()
two()
three()

// here first one is called then two then three , as one is holding two so two is called but inside two its holding three so twoo three three is printed.