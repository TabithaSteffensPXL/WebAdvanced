"use strict";
let now = new Date();
if (now.getHours() <= 12){
    document.getElementById("greeting").innerHTML = "Goedemorgen";
}
else if (now.getHours()> 12 && now.getHours() <= 18){
    document.getElementById("greeting").innerHTML = "Goede dag";
}
else {
    document.getElementById("greeting").innerHTML = "Goede avond";
}
