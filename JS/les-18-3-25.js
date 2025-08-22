"use strict";

const baseUrl = "http://localhost:3000/";

function GetWithEndpoint(endpoint) {
    return fetch(`${baseUrl}${endpoint}`)
        .then(response => {
            if (!response.ok) return new Error ("HTTP Error: " + response.status);
            //response.json()
            return response.json();
        })
}

//GetWithEndpoint("students");

function GetSpecificStudentById(endpoint, studentId) {
    fetch(`${baseUrl}${endpoint}?id=${studentId}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}
//("students", 12402665);

function GetSpecificStudentByName(endpoint, name) {
    const encodedname = encodeURIComponent(name);
    fetch(`${baseUrl}${endpoint}?name=${encodedname}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}
//GetSpecificStudentByName("students", "Tabitha");

function GetFromEndpointByPropertyAndValue(endpoint, property, value) {
    let valueInput;
    if (typeof value === "number") {
        valueInput = value;
    }
    else {
        valueInput = encodeURIComponent(value);
    }
    fetch(`${baseUrl}${endpoint}?${property}=${valueInput}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}

function addItemToEndpoint(endpoint, valueObject){
 /*   fetch(`${baseUrl}${endpoint}`)
        .then(response => response.json())
        .then(data => data.id = data[data.length - 1].id + 1)*/
    fetch(`${baseUrl}${endpoint}`, {
        method: "POST",
        body: JSON.stringify(valueObject),
        headers: {
            contentType: "application/json; charset=utf-8"
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}
/*
GetFromEndpointByPropertyAndValue("students", "id", 12402665);
GetFromEndpointByPropertyAndValue("students", "name", "Tabitha");*/
//GetWithEndpoint("students")
//GetWithEndpoint("classrooms");
//GetWithEndpoint("courses");

const container = document.createElement("div");
document.body.appendChild(container);

const buttonStudents = document.createElement("button");
buttonStudents.innerText = "Show Students";
container.appendChild(buttonStudents);

buttonStudents.addEventListener("click", () => {
    const students = GetWithEndpoint("students").then(students => {
        displayList(students);
    });
});

const buttonCourses = document.createElement("button");
buttonCourses.innerText = "Show Courses";
container.appendChild(buttonCourses);

buttonCourses.addEventListener("click", () => {
    const courses = GetWithEndpoint("courses").then(courses => {
        displayList(courses);
    });
});

function displayList(list) {
    const ul = document.createElement("ul");
    addListItemToUnorderedList(ul, list)
    container.appendChild(ul);
}

function addListItemToUnorderedList(ul, list) {
    for (let i = 0; i < list.length; i++) {
        const li = document.createElement("li");
        li.innerText = `${list[i].id} the name of the student is ${list[i].name}`;
        ul.appendChild(li);
    }
}
//addItemToEndpoint('students', {"name":"Beno", "age":20, "email":"benno.laukens@student.pxl.be"});