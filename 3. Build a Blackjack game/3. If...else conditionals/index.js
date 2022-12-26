let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard

if (sum<21){
    console.log("Do you want to draw another card?")
}

else if (sum===21){
    console.log("Blackjack")
}

else{
    console.log("you're out of the game")
}