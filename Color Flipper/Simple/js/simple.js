const colors = ["red","green","blue","yellow","orange","pink","white"]
let btn = document.querySelector(".btn")
let color = document.querySelector(".color")

btn.addEventListener("click", function() {
    let randomNumber = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[randomNumber]
    color.innerHTML = colors[randomNumber].toUpperCase();
    color.style.color = colors[randomNumber]
})