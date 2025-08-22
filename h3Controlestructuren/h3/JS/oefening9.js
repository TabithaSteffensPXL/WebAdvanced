"use strict";

let number = parseInt(prompt("Geef een getal tussen 1 en 10: "));

if (number < 1 || number > 10) {
    document.getElementById("nulTabel").innerHTML = "Niet mogelijk";
}
else {
    document.getElementById("nulTabel").innerHTML = `${number} * 0 = 0`;
    document.getElementById("eenTabel").innerHTML = `${number} * 1 = ${number}`;
    document.getElementById("tweeTabel").innerHTML = `${number} * 2 = ${number * 2}`;
    document.getElementById("drieTabel").innerHTML = `${number} * 3 = ${number * 3}`;
    document.getElementById("vierTabel").innerHTML = `${number} * 4 = ${number * 4}`;
    document.getElementById("vijfTabel").innerHTML = `${number} * 5 = ${number * 5}`;
    document.getElementById("zesTabel").innerHTML = `${number} * 6 = ${number * 6}`;
    document.getElementById("zevenTabel").innerHTML = `${number} * 7 = ${number * 7}`;
    document.getElementById("achtTabel").innerHTML = `${number} * 8 = ${number * 8}`;
    document.getElementById("negenTabel").innerHTML = `${number} * 9 = ${number * 9}`;
    document.getElementById("tienTabel").innerHTML = `${number} * 10 = ${number * 10}`;
}