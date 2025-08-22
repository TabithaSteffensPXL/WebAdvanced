"use strict";

let now = new Date();

let day;
switch (now.getDay()) {
    case 0:
        day = "zondag";
        break;
    case 1:
        day = "maandag";
        break;
    case 2:
        day = "dinsdag";
        break;
    case 3:
        day = "woensday";
        break;
    case 4:
        day = "donderdag";
        break;
    case 5:
        day = "vrijdag";
        break;
    case 6:
        day = "zaterdag"
        break;
}

if (now.getHours() <= 12 && now.getHours() >= 7) {
    document.getElementById("greeting").innerHTML = `Goedemorgen het is ${day} tussen 7uur en 12uur`;
} else if (now.getHours() > 12 && now.getHours() <= 18) {
    document.getElementById("greeting").innerHTML = `Goede dag het is ${day} tussen 12uur en 18uur`;
} else {
    document.getElementById("greeting").innerHTML = `Goede avond het is ${day} tussen 18uur en 7uur`;
}