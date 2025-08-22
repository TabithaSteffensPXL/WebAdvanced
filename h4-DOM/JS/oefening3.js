"use strict"
const mainPart = document.getElementById("main");
const redText = document.getElementById("red");
redText.style.color = "red";

const removeText = document.getElementById("weg")

mainPart.removeChild(removeText);

const headerH1 = document.createElement("h1");
headerH1.innerText = "Welkom PandiX";

const header = document.getElementById("header");
header.appendChild(headerH1);

const addressInfo = document.createElement("aside");

const infoText = document.createElement("p");
infoText.innerText = "Hier is adres info voor PXL";
addressInfo.appendChild(infoText);
addressInfo.style.width = "20%";

mainPart.appendChild(addressInfo);
