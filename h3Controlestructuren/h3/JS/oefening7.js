"use strict";

let month = new Date().getMonth();
let monthName;
switch (month)
{
    case 0:
        monthName = "januari";
        break;
    case 1:
        monthName = "februari";
        break;
    case 2:
        monthName = "maart";
        break;
    case 3:
        monthName = "april";
        break;
    case 4:
        monthName = "mei";
        break;
    case 5:
        monthName = "juni";
        break;
    case 6:
        monthName = "juli";
        break;
    case 7:
        monthName = "augustus";
        break;
    case 8:
        monthName = "september";
        break;
    case 9:
        monthName = "oktober";
        break;
    case 10:
        monthName = "november";
        break;
    case 11:
        monthName = "december";
        break;
    default:
        monthName = "Month";
        break;
}
document.getElementById("greeting").innerHTML = `Het is momenteel ${monthName}`;