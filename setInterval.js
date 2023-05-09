//callback --> what happens (function)
//interval --> how often it happens (integer, delay in milliseconds)

// setTimeout(callback, interval)

console.log("it starts now")

let seconds = 0
console.log(`${seconds} seconds have gone by`)
let timer = setInterval(() => {
    seconds = seconds + 2
    console.log(`${seconds} seconds have gone by`)
    if(seconds >= 10) {
        clearInterval(timer)
        console.log("it ends now")
    }
}, 2000)

