"use strict";

let numberOfClicksOnButton = 0;
document.getElementById("btn").addEventListener("click", numberOfClicks);
//this adds an event listener to the button that calls the numberOfClicks function
//whenever the button is clicked (type)

function numberOfClicks(){
    numberOfClicksOnButton++;
    document.getElementById('click_paragraph').innerText = `You've clicked the button ${numberOfClicksOnButton} times`;
}

