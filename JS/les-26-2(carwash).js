"use strict";

const cars = [];

addCar({licensePlate:"1-ABC-123",  owner:"Jan", dirtLevel:7});
addCar({licensePlate:"1-ADB-153",  owner:"Jane", dirtLevel:9});
addCar({licensePlate:"1-TEA-123",  owner:"Justin", dirtLevel:3});
addCar({licensePlate:"1-ATE-124",  owner:"Justine", dirtLevel:2});

console.log(cars);
showCars();
console.log();
sortByDirtLevel();

console.log(findCar('1-ABC-123'));
console.log(findCar('1-ABC-143'));


//cars.some(c => c.licensePlate === cars.licensePlate)
//checks if the licensePlate is the same as another licensePlate

function addCar(car){
    if (isValidCar(car) && checkLicensePlate(car.licensePlate)) {
       cars.push(car);
    } else {
        console.log(`Please enter a valid car object`);
    }
} //this adds the car to the list(array) if the car is valid and if the licensePlate is different 

function  isValidCar(car){
    if (car && typeof car === 'object') {
        if (car.licensePlate && typeof car.licensePlate === 'string') {
            if (car.owner && typeof car.owner === 'string') {
                if (car.dirtLevel && (car.dirtLevel >= 1 && car.dirtLevel <= 10)){
                    return true;
                }
            }
        }
    } else {
        return false;
    }
} //makes sure that the car is an object with the right types for the attributes of licensePlate, owner, and dirtLevel

function checkLicensePlate(licensePlate){
    for (const car in cars) {
        if (car.licensePlate === licensePlate){
            return false;
        }
    }
    return true;
} //also checks if a licensePlate is the same as another licensePlate

function showCars(){
    if (checkIfCarsIsNotEmpty()){
    for (const car of cars){
        console.log(`Auto met nummerplaat ${car.licensePlate} van ${car.owner} heeft eeen vuilheidsniveu van ${car.dirtLevel}`);
    }
    } else {
        console.log("There are no cars in your list :(");
    }
}//this shows the cars in the console

function sortByDirtLevel(){
    if (checkIfCarsIsNotEmpty()){
       cars.sort((car_a, car_b) => car_b.dirtLevel - car_a.dirtLevel);
       return showCars();
    }
}//this sorts the cars by their dirt level then shows them in the console

function checkIfCarsIsNotEmpty(){
/*    if (cars && cars.length > 0){
        return true;
    } else {
        return false;
    }
    This is the same as below */
    return cars && cars.length > 0;
}// simplifies other code because there's multiple uses of if(cars.length > 0)

function findCar(licensePlate){

    if (checkIfCarsIsNotEmpty()){
        for (const car of cars){
            if (car.licensePlate === licensePlate){
                return `Car with licensePlate ${car.licensePlate} has been found!`;
            }
        }
            return `No car with this licensePlate ${licensePlate} found.`;
    }
} //must write console.log before function or else it won't write anything
