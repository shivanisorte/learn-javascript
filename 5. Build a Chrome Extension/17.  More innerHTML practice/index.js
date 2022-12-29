
const container = document.getElementById("container")

container.innerHTML = "<button onclick='buy()'>Buy!</button>"

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"

container.innerHTML += "<p id='para'></p>"

para = document.getElementById('para')
function buy(){
    para.textContent = "Thank you for buying!"
}