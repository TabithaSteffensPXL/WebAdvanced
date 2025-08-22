"use strict";

for (let i = 1; i <= 15 ; i+=2) {
    console.log(`${"=".repeat((15-i)/2 )}${"#".repeat(i)}${"=".repeat((15-i) /2)}`);
}