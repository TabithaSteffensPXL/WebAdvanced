"use strict";

let answerPrompt = prompt("Sport je graag?");
/*
if (answerPrompt === "Ja")
{
    alert("Just do it!");
} else {
    alert("Jammer, dan blijf maar liggen");
}
*/
switch (answerPrompt) {

    case "ja":
        alert("Just do it!");
        break;
    case "nee":
        alert("Jammer, dan blijf maar liggen");
        break;
    default:
        alert("Dat was niet duidelijk, antwoord je vanuit je luie zetel?");
        break;
}