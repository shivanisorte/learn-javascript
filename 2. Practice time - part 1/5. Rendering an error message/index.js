// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

para = document.getElementById("error")
function purchase(){
    // para.innerText = "Something went wrong, please try again"
    para.textContent = "Something went wrong, please try again"
}