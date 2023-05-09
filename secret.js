const secretFunction = () => {
    console.log("will this get executed before")
    setTimeout(() => {
        console.log("secret")
    }, 0)
}

module.exports = {secretFunction}