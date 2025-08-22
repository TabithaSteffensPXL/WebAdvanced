"use strict";



//oefening 1
const title_oef1 = document.createElement("h1");
title_oef1.innerHTML = "Oefening 1 : changes text on click";
title_oef1.style.color = "red";
title_oef1.style.font = "Arial"
document.body.appendChild(title_oef1);
let num = 0;
const button = document.createElement("button");
button.innerText = "Click Me!";
document.body.appendChild(button);
button.addEventListener("click", function (event) {
    num++;
    if (event.target.innerText === `Geklikt! Je hebt ${num} keer geklikt`){
        event.target.innerText = "Click Me!";
    } else{
        event.target.innerText = `Geklikt! Je hebt ${num} keer geklikt`;
    }
   //event.target.innerText = event.target.innerText === "Click Me!" ? "Geklikt!" : "Click Me!";
})
button.classList.add("btn");


//Oefening 2
const title_Oef2 = document.createElement("h1");
title_Oef2.innerHTML = "Oefening 2: change color on click";
title_Oef2.style.color = "blue";
title_Oef2.style.font = "Arial"
document.body.appendChild(title_Oef2);
const backGroundButton = document.createElement("button");
backGroundButton.innerText = "Change my color";
document.body.appendChild(backGroundButton);
backGroundButton.addEventListener("click", function (event) {
    const color = GetRandomColor();
    event.target.style.backgroundColor = color;
    event.target.innerText = `Current color: ${color}`;
})

function GetRandomColor(){
    return `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}`;
}

//Oefening 3
const title_oef3 = document.createElement("h1");
title_oef3.innerText = "Oefening 3: change font-size on click";
title_oef3.style.color = "green";
title_oef3.style.font = "Arial"
document.body.appendChild(title_oef3);
const textForIncrease = document.createElement("p");
textForIncrease.innerText = "Change my size!";
document.body.appendChild(textForIncrease);

const fontSizeButton = document.createElement("button");
fontSizeButton.innerText = "Increase the font size of the paragraph!";
fontSizeButton.style.padding = "10px";
fontSizeButton.style.margin= "10px";
document.body.appendChild(fontSizeButton);
fontSizeButton.addEventListener("click", function () {
    let currentFontSize = parseFloat(window.getComputedStyle(textForIncrease).fontSize);
    textForIncrease.style.fontSize = (currentFontSize + 3) + "px";
})

const fontSizeLowButton = document.createElement("button");
fontSizeLowButton.innerText = "Decrease the font size of the paragraph!";
fontSizeLowButton.style.padding = "10px";
fontSizeLowButton.style.margin= "10px";
document.body.appendChild(fontSizeLowButton);
fontSizeLowButton.addEventListener("click", function () {
    let currentFontSize = parseFloat(window.getComputedStyle(textForIncrease).fontSize);
    textForIncrease.style.fontSize = (currentFontSize - 3) + "px";
})

//oefening 4
const title_oef4 = document.createElement("h1");
title_oef4.innerText = "Oefening 4: change font-size on click";
title_oef4.style.color = "orange";
title_oef4.style.font = "Arial"
document.body.appendChild(title_oef4);

let inputField = document.createElement("input");
inputField.style.width = "250px";
inputField.style.margin = "10px";
const inputFieldButton = document.createElement("button");

inputField.placeholder = "Fill in the field to clear it afterwards";
inputFieldButton.innerText = "Clear text";

inputFieldButton.addEventListener("click", function () {
    if (inputField.value !== "") {
        inputField.value = "";
    } else {
        console.log(`The input field is empty or invalid`);
    }
})
document.body.appendChild(inputField);
document.body.appendChild(inputFieldButton);


//oefening 5
const title_oef5 = document.createElement("h1");
title_oef5.innerText = "Oefening 5: Hover text change";
title_oef5.style.color = "purple";
title_oef5.style.font = "Arial"
document.body.appendChild(title_oef5);

const hoverText = document.createElement("p");
hoverText.innerText = "Hover text change";
hoverText.style.backgroundColor = "pink";
hoverText.style.width = "250px";
hoverText.style.padding = "10px";
document.body.appendChild(hoverText);

hoverText.addEventListener("mouseover", function (event) {
    event.target.innerText = "The mouse is hovering over me!"; //this is better than hoverText.innerText
    event.target.style.backgroundColor = GetRandomColor();//classes have priority over this with bootstraps and such
})

hoverText.addEventListener("mouseout", function (event) {
    event.target.innerText = "The mouse is not hovering over :(";
    event.target.style.backgroundColor = GetRandomColor();
    //hoverText.innerText = "The mouse is not hovering over :("; NO!
})


//Oefening 6 (11/3/25)
const title_oef6 = document.createElement("h1");
title_oef6.innerText = "Oefening 6: Make a list (plus flexbox tutorial)";
title_oef6.style.color = "#238075";
title_oef5.style.font = "Arial"
document.body.appendChild(title_oef6);

const shortListForStarters = ["Pizza", "Sleeping in class",
    "Procrastination level: Expert",
    "Coding for coffee",
    "Laughing at your own jokes",
    "The WiFi isn't working again",
    "That moment when you forget what you were doing"];

const unorderedList = document.createElement("ul");

const horizontalDiv = document.createElement("div");
horizontalDiv.style.display = "flex";
horizontalDiv.style.justifyContent = "space-around";


const input_Field = document.createElement("input");
input_Field.style.width = "250px";
input_Field.style.margin = "10px";
input_Field.placeholder = "Fill in your to do list!";

const addToListButton = document.createElement("button");
addToListButton.innerText = "Add New Item to List";
addToListButton.style.padding = "5px";
addToListButton.style.width = "250px";
addToListButton.style.margin = "10px";
addToListButton.style.backgroundColor = "#8be790";


const verticalDiv = document.createElement("div");
verticalDiv.style.display = "flex";
verticalDiv.style.flexDirection = "column";

verticalDiv.appendChild(input_Field);
verticalDiv.appendChild(addToListButton);

horizontalDiv.appendChild(unorderedList);
horizontalDiv.appendChild(verticalDiv);
document.body.appendChild(horizontalDiv);
let numClicks = 0;
addToListButton.addEventListener("click", function () {
    numClicks++;
  if (numClicks === 1) {
     while(unorderedList.firstChild) {
         unorderedList.removeChild(unorderedList.firstChild);
     }
     addToList();
  }
    else  {
        addToList();
    }
})

function addToList() {
    if (input_Field.value.trim() !== "") {
        const li = document.createElement("li");
        li.innerText = input_Field.value;
        const removeButton = document.createElement("button");
        removeButton.innerText = "X";
        removeButton.addEventListener("click", function () {
            unorderedList.removeChild(li);
        })

        li.appendChild(removeButton);
        unorderedList.appendChild(li);
        input_Field.value = "";
    }
}

input_Field.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addToListButton.click();
    }
})

window.addEventListener('DOMContentLoaded', function () {
    showItems(shortListForStarters, unorderedList);
})

function showItems(listOfItems, listDisplay) {
    for(let item of listOfItems) {
        const li = document.createElement("li");
        li.innerText = item;
        listDisplay.appendChild(li);
    }
}