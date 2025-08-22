"use strict";

let number1 = parseInt(prompt("Enter a number"));
let number2 = parseInt(prompt("Enter another number"));

let answer = document.createElement('p');

answer.innerHTML = multiplication(number1, number2);

document.body.appendChild(answer);

function multiplication(number, anotherNumber) {
    return number * anotherNumber;
}

