"use strict";

let aantalLijnen = parseInt(prompt("Geef een nummer tussen 1 en 10"));
let triangle  = "";


if (aantalLijnen <= 10 || aantalLijnen >= 1) {
    for (let i = 1; i <= aantalLijnen; i++) {
        triangle+=(`${"#".repeat(i)} <br>`);
    }
    document.getElementById("driehoek").innerHTML = triangle;
}
else {
    document.getElementById("driehoek").innerHTML = "Niet mogelijk";
}