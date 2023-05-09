const {secretFunction} = require('./secret')

console.log("beginning")

console.log("middle")

//Async Function that prints out the word "secret"
console.log("will this get executed before")

for(let i=0; i < 5; i++) { 
    console.log(i)
}


//This secret function prints out "secret"


console.log("end")