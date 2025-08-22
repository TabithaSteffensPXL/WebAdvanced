"use strict";

let sentence = prompt("Give a random sentence", "Hello World!");

const pElement = document.createElement("p");
pElement.innerHTML = startWithHello(sentence);
document.body.appendChild(pElement);

function startWithHello (sentence){
    if (sentence.startsWith("Hello")){
            return sentence;
    } else {
     sentence = sentence.charAt(0).toLowerCase() + sentence.substring(1);
        sentence = `Hello ${sentence}`;
    return sentence;
}}


