"use strict";

let array = ["test", "  ", "    ", ];
let a1 = array;
array.push("Hallo");
let a2 = [...array]; //makes a copy of the array instead of using the array (I think?);
array.push("testingtest");
console.log(array);
console.log(a1);
console.log(a2);