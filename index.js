// random number for player 1 dice

var randomNum1 = Math.floor(Math.random() * 6) + 1;

// selecting player 1 dice using random number

document.querySelector(".img1").setAttribute("src", "images/dice"+randomNum1+".png");

// random number for player 2 dice

var randomNum2 = Math.floor(Math.random() * 6) + 1;

// selecting player 2 dice using random number

document.querySelector(".img2").setAttribute("src", "images/dice"+randomNum2+".png");

// display winner

if (randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
}
if (randomNum2 > randomNum1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
}

if (randomNum1 == randomNum2) {
    document.querySelector("h1").innerHTML = "Draw!"
}