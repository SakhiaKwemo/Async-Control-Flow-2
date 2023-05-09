const box = document.getElementById('box')
const int = document.getElementById('int')

console.log("first")



console.log("end")

let array = ['red', 'yellow', 'green', 'blue']
box.addEventListener('click', () => {
    rand = Math.floor(Math.random() * array.length)
    box.style.backgroundColor = array[rand]
})

// int.addEventListener('change', () => {
//     console.log("the input is changing")
// })

//event --> when 
//callback --> what
// addEventListener(event, callback)