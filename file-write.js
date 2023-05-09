const fs = require('fs')

console.log("Sync: It begins here")

fs.writeFileSync('./hello.txt', "Sakhia is an awesome teacher")

console.log("Sync: It finishes here")


console.log("ASync: It begins here")

fs.writeFile('./hello.txt', 'Sakhia is a SUPER awesome teahcer', {flag: 'a'}, (err) => {
    console.log("The file has been saved")
})

console.log("ASync: It finishes here")

