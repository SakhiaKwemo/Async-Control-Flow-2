console.log("1")

//Defining Function --> Recipe for function
const testFunction = (callback) => {
    console.log("2")
    setTimeout(() => {
        callback()
        console.log("3")
    }, 0)
    console.log("4")
}

//Running test function --> Baking the Cake of the function
testFunction(() => {
    console.log("5")
})


console.log("6")


//Guess #1
//1,2,4,6,5,3 ++

//Guess #2
//1,2,3,4,6,5

//Guess #3
//1,5,2,3,4,6

//Guess $4
//1,4,5,6,3

//Guess #4
//1,2,4,5,3,6

//1,2,4,5,6,3 +++++

//1,2,5,4,3,6

//1,2,6,4,5,3

//1,2,5,4,6,3

//1,2,3,5,4,6