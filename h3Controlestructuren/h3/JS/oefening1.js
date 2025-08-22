"use strict";

let birthdayUser = new Date(prompt("Give your birthday(YYYY-MM-DD): ")).getFullYear();
let thisYear = new Date().getFullYear();

if (thisYear - birthdayUser >= 20)
{
    alert("Yay! You're old enough to see the info on this page!")
}