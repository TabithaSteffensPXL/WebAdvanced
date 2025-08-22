"use strict"
document.getElementsByTagName("p"); // this points to html elements
document.getElementsByClassName("demo"); //this points to CSS elements or HTML Classes
document.getElementsByName("name"); //points to html elements with names (think formuliers)
document.querySelector("p.demo");  /* this points to the first element that has these elements
in this example it looks for the first p tag with the demo class
*/

const button = document.createElement("button");
/*
this creates a button, but it is not yet added to the HTML page
*/

button.innerText = "Show"; //you have to add text to the button or else it won't show it when you run it

//this is all CSS being added to button using JS
button.style.backgroundColor ="#c9b8d8";
button.style.height = "50px";
button.style.width = "200px";
button.style.borderRadius = "5px";
button.style.color = "#000";
button.style.padding = "5px";
button.style.border = "1px solid #000";
button.style.boxShadow = "0px 1px 5px #000";
button.style.fontWeight = "bold";

document.body.appendChild(button); //this effectively adds the button to the HTML

/*
button.addEventListener("mouseover", function(e) {
    button.style.backgroundColor = "#4f376a";
})
button.addEventListener("mouseout", function(e) {
    button.style.backgroundColor = "#c9b8d8";
})
hyper specific hover effect that can be done easier with a hover effect in CSS
*/
button.addEventListener("click", function() {

    button.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
}) //this is a click event that changes the background color to a random color


// this is a series of functions that adds an array of student to a elements which is in an unordered list
const students = [];

addStudentToStudentArray("Joe");
addStudentToStudentArray("Mary");
addStudentToStudentArray("James");
addStudentToStudentArray("June");

function addStudentToStudentArray(student){
    if (student){
        students.push(student);
    }
}
const ul = document.createElement("ul");
const firstNav = document.getElementsByTagName("nav")[0];

firstNav.appendChild(ul);

function addStudentAsLiNodeToTheUL(student){
    const li = document.createElement("li");
    const a = document.createElement("a");
    ul.appendChild(li); //li's have siblings, a's do not in this example
    li.appendChild(a);
    a.innerText = student;
    a.href = "#";
    li.style.listStyle = "none";
    a.style.color = "#000";
}

for (let count = 0; count < students.length; count++) {
    addStudentAsLiNodeToTheUL(students[count]);
}