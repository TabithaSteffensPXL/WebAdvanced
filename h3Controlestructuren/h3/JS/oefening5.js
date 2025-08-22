"use strict";

let guessedNumber = parseInt(prompt("Guess a number: ", "1"));

if (guessedNumber < 50) {
    document.getElementById("answer").innerHTML = "Te laag :(";
}
else if (guessedNumber > 50) {
    document.getElementById("answer").innerHTML = "Te hoog :(";
}
else {
    document.getElementById("answer").innerHTML = "Proficiaat! Goed gegokt :)";
}