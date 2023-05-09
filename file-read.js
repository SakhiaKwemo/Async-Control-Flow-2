const fs = require('fs')


console.log("Sync: It begins here")

const file = fs.readFileSync('./hello.txt', 'utf-8')
console.log("file content using Sync: " + file)

console.log("Sync: It finishes here")


console.log("Async: It begins here") 
fs.readFile('./hello.txt', {encoding: 'utf-8'}, (error, data) => {
    console.log("file content using Async: " + data)
})

console.log("Async: It finishes here")


// array.forEach((e, index) => {

// })