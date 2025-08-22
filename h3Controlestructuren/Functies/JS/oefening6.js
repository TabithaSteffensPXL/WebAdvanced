"use strict";

let sentence = prompt("Give a random sentence");

let numberToCut = parseInt(prompt("Give a random number", '5'));

const newElement = document.createElement("p");
newElement.innerHTML = zinSplitsen(sentence, numberToCut);
document.body.appendChild(newElement);


//this doesn't work
function zinSplitsen(sentence, number){
    let sentenceList;
    sentenceList = [sentence.substring(0, number), sentence.substring(number+1, sentence.length)];

    return `${sentenceList[0]} <br> ${sentenceList[1]}`;
}