"use strict";
//writing variables
//var- don't use, can be anything

let a = "also can be anything and can be changed";
const b = "has a set value but can change properties if it has properties, used normally for objects but not always";

let c = a; //Makes a copy of a and applies it to c
a = "this is a change to the original and the copy stays the same";
/*if (c === a ){
    console.log("copy identical");
}
else {
    console.log("original changed");
}*/

const object = {name: "Name"};
//console.log(object);
object.name = "Naam"; //can change properties of a constant, but not the constant itself
//console.log(object);

//Primitive types

/*
string
number
boolean
float
 */
const name = "Tabi";
const bool = true;
const age = 25;
const price = 2.11

/*
Reference types
docent{}
 */
const docent = {
    aanspreking: "Dhr", naam: "Scheurs", voornaam: "Jelle", kennisvakken: [
        {vak: "Web Advanced", evaringsnivaeu: 5, jaren_lesgeven: 1}
    ]
}
//you can't change this constant afterwords, but you can change the properties of them at any time
//for example if they give classes another year you can change it to 2

//Calculate sum

const firstnumber = 2;
const secondNumber = 8;

const sumNumbers = firstnumber + secondNumber;
//console.log(sumNumbers);

//Math.random gives a random number between 0 and 1
let getaRandomNumber = Math.floor(Math.random() * 250);
//console.log(getaRandomNumber);
//console.log(getaRandomNumber);

function getRandomNumber(number){
    return Math.floor(Math.random() * number);
}
//Number that is given to the function is a parameter
//a parameter fills a place in the function, so it can change when calling the function
//the parameter can be checked on type -> kind of expectation from the function to work with

function getRandomNumberWithValidation(number){
    if(number && !isNaN(number) && typeof number === "number"){
        return Math.floor(Math.random() * number);
    } else {
        console.log(`${number} is not valid`);
    }
}
//console.log(getRandomNumber("string"))
//console.log(getRandomNumber(5));
//console.log(getRandomNumberWithValidation("string"));

let number_x = getRandomNumberWithValidation(591)
let number_y = getRandomNumberWithValidation(true);

console.log(number_x);
console.log(number_y);


//mathematical operators

/*
* + adding
* - subtracting
*  * -multiplying
*  / - dividing
*  % modulo (rest from a division)
* ++ = increment (+1)
* -- decrement (-1)
* */

let evenNumber = 10 % 2 //? 0 : console.log("even number");
if (evenNumber === 0){
   // console.log("Even number");
} else {
    //console.log("Uneven number");
}

//console.log(evenNumber);


//String functions
let welcomeWord = "Hello World";

//length of string
let characterCount = welcomeWord.length;
//console.log(characterCount);

//which character is at position 0
let characterAt = welcomeWord[0];//welcomeWord.charAt(0)
//console.log(characterAt);

//show first 5 characters
let firstFiveCharacters = welcomeWord.substring(0, 5);
//console.log(firstFiveCharacters);

//which character position shows letter W
let locationOfCharacter = welcomeWord.indexOf("W");
//console.log(locationOfCharacter);

//at which position is character 'a' at
let locationOfCharacterA = welcomeWord.indexOf("a");
//console.log(locationOfCharacterA);
//gives -1 if it doesn't exist

//at which position does 'l' show for the last time
let lastIndexOfCharacter = welcomeWord.lastIndexOf("l");
//console.log(lastIndexOfCharacter);
let control = welcomeWord.charAt(lastIndexOfCharacter);
//console.log(control);

//Change character H with character G
let changeCharacter = welcomeWord.replace('H', 'G');
//console.log(changeCharacter);

//Everything in all uppercase
let allUpperCase = welcomeWord.toUpperCase();
//console.log(allUpperCase);

//Everything in all lowercase
let allLowerCase = welcomeWord.toLowerCase();
//console.log(allLowerCase);

//everything but the first character is upper, first character lower
let firstLowerThenUpper = welcomeWord.charAt(0).toLowerCase() + welcomeWord.substring(1, welcomeWord.length).toLowerCase();
//console.log(firstLowerThenUpper);


//Logical operators
// && -> and (checks both and only returns true if both are validated)
// || -> or (checks both, returns true if one or more are validated)
// ! -> not (same is "is not")


//Special operators
// typeof -> gives the type of back

//Shorthand if else statement
let day = "Monday";
let speakingMoment ;
    speakingMoment = (day === "Saturday") ? "Weekend!" : "Mondays....";
//console.log(speakingMoment);


//Control structures

//Arrays
const students = [];

students.push("Eli");
console.log(students);
students.push("Tabitha");//adds one to end
students.push("Benno");
console.log(students);

students.pop();//removes one from end
console.log(students);
students.shift()//removes from beginning
console.log(students);
students.unshift("Shirwan");//adds one to the beginning
console.log(students);

students.push("Benno");
students.unshift("Eli");
students.push("Ricco");
students.push("Mehmet");
students.unshift("Azra");
console.log(students);

students.sort((student_a, student_b) => student_a.localeCompare(student_b));
//localeCompare sorts strings, you can just use regular variables for numbers
console.log(students);

students.forEach(student => {
    console.log(`Name of student: ${student}`);
})
