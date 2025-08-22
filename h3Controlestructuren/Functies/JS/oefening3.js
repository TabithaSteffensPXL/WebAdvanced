"use strict";

let numberOne = parseInt(prompt("Guess a number"));

let numberTwo = parseInt(prompt("Guess another number"));

let answer  = document.createElement("p");

answer.innerHTML = calculateGuess(numberOne, numberTwo);

document.body.appendChild(answer);

function calculateGuess(numOne, numTwo) {
    if(numOne === 50 || numTwo === 50){
        return `Hoera! Een van uw nummers zijn 50!`;
    } else if (numOne + numTwo === 50) {
        return `Hoera! De som van uw nummers is 50!`;
    }

}