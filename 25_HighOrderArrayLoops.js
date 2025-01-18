// ARRAYS specific Loops [{} , {}, {}]


// FOR OF 

const arr = [1,2,3,4,5]

for (const i of arr) {
    //console.log(i);
    
}

const greetings = "hello world !"
for (const i of greetings) {
    //console.log(i);
    
    
}



// MAPS => they basically holds the unique values. Means repeated statements are written only once and are uniquely identified.

const maps = new Map ()
 
maps.set("GAME 1" , "GTA")
maps.set("GAME 2" , "NFS")
maps.set("GAME 3" , "COD")
maps.set("GAME 4" , "GOW")
maps.set("GAME 1" , "GTA")


for (const [key , value] of maps) {
    console.log(`${key} = ${value}`);
    
    
}


