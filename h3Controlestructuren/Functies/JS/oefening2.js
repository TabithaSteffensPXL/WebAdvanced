"use strict";

let numberToSubtract = parseInt(prompt("Enter number to Subtract from 100:"));

let answer = document.createElement("p")

answer.innerHTML = subtract(numberToSubtract);

document.body.appendChild(answer);

function subtract(num) {
    return 100 - num;
}