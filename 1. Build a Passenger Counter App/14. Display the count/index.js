// document.getElementById("count").innerText = 5

// change the count-el in the HTML to reflect the new count

countEl=document.getElementById('count-el')
console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    console.log(count)
    countEl.innerText=count
    // document.getElementById('count-el').innerText=count
}


