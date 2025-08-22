"use strict"

let titleAuthorRead = ["Titel", "Auteur", "Gelezen"];

let theoryBook = ["The theory of everything", "Steven Hawking", "Ja"];

let twelveRulesBook = ["12 rules for life", "Jordan Peterson", "Nee"];

const ul = document.getElementById("lijst");

const liOne = document.createElement("li");

const liTwo = document.createElement("li");

const liThree = document.createElement("li");

liOne.innerHTML = `${titleAuthorRead[0]} ${titleAuthorRead[1]} ${titleAuthorRead[2]}`;
liTwo.innerText = `${theoryBook[0]} ${theoryBook[1]} ${theoryBook[2]}`;
liThree.innerText = `${twelveRulesBook[0]} ${twelveRulesBook[1]} ${twelveRulesBook[2]}`;

ul.appendChild(liOne);
ul.appendChild(liTwo);
ul.appendChild(liThree);




