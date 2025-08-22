"use strict";

let now = new Date();
if (now.getHours() <= 12 && now.getHours() >= 7){
    document.getElementById("greeting").innerHTML = "Goedemorgen het is tussen 7uur en 12uur";
}
else if (now.getHours()> 12 && now.getHours() <= 18){
    document.getElementById("greeting").innerHTML = "Goede dag het is tussen 12uur en 18uur";
}
else {
    document.getElementById("greeting").innerHTML = "Goede avond het is tussen 18uur en 7uur";
}