let person = { // how to create an object
    name: "Tabitha",
    surname: "Steffens",
    job: "Student",
    gender: "Female",
    status: "Married",
    hobbies: [
        "Learning", "Singing", "Gaming", "Pokemon"
    ],
    toString: function () {
        return `${person.name.charAt(0).toUpperCase()}. ${person.surname}`;
    }
}
/*
console.log(person.toString());

//console.log(person.name.charAt(0).toUpperCase());

let stringToArray = "Learning, Singing, Gaming, Pokemon";
console.log(stringToArray); //gives it as a string
console.log("");

let hobbyArray = stringToArray.split(", "); //splits a string into an array
console.log(hobbyArray);

console.log(stringToArray[0]);//gives first character of the string (this case L)
console.log(hobbyArray[0]);

//let parsedNumberFromPrompt = parseInt(prompt("Give a number between 1 and 50", "1"));//perfectly possible to nest prompt within a parse
//console.log(typeof parsedNumberFromPrompt);

let name = person['name']; //only possible with attributes and not with functions. this is an alternative to person.name. you can probably use either "" or '' for functions you have to add () at the end
console.log(name);

*/
/*
console.log(btwCalculation(100, 1.21));
console.log(btwCalculation(100, 1.06));
//calculateSum(); this does NOT work because it only exists from line 39 on

let calculateSum = function(){ //can only be used from this line on
    console.log(2 + 2)
    //return 2 + 2;
}
calculateSum();

(function (bedrag){ //this is a function that only works once and can't be called again
    console.log(bedrag *1.21)
}(100));

function btwCalculation(amount, percentage){ //this makes a function that is available to the entire file, not only from this line on
    return amount * percentage;
}


function makeObject(name, firstName, gender, age){  //this is comparable to a constructor C#, it makes an object that can be used
    return {
        name: name,
        firstName: firstName,
        gender: gender,
        age: age,
    }
}
let person1 = makeObject("Steffens", "Tabitha", "F", 25);
let person2 = makeObject("Spreuwers", "Pieterjan", "M", 30);
let person3 = makeObject("World", "Hello", "F", 28);

let personArray = { person1,  person2, person3 };

console.log(personArray);
*/

//it is also possible to make objects within objects, kinda like how in constructors in C# you can make for example an address for a person


// functions to check age for alcohol
function calculateAge(birthDate){
    return new Date().getFullYear() - birthDate.getFullYear();
}
let age = calculateAge(new Date("1993-04-15"));

const ageForBeer = 16;
const ageForStrongDrinks = 18;

function checkAgeForAlcoholUsage(checkAge, name){
    if (checkAge < ageForBeer){
        return `Unfortunately ${name}. your age of ${checkAge} is too low to drink alcohol`;
    }
    else if (checkAge >= ageForBeer && checkAge < ageForStrongDrinks ){
        return `Hey ${name}. your age of ${checkAge} is too low to drink strong alcohol, but you can enjoy beer!`;
    }
    else {
        return `Hey ${name}. your age of ${checkAge} is high enough to drink strong alcohol and beer!`;
    }
}

console.log(checkAgeForAlcoholUsage(age, "Jelle"));
console.log(checkAgeForAlcoholUsage(calculateAge(new Date("2020-11-11")), "Jerry"));
console.log(checkAgeForAlcoholUsage(calculateAge(new Date("2008-11-11")), "March"));