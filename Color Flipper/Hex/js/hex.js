const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let btn = document.querySelector(".btn")
let color = document.querySelector(".color")

btn.addEventListener("click", function() {
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        hexColor += hex[randomNumber()]
    }
    document.body.style.backgroundColor = color.innerHTML = color.style.color = hexColor
})

function randomNumber() {
    return Math.floor(Math.random() * hex.length)
}