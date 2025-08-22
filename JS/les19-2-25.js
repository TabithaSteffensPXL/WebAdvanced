"use strict";

let title = document.getElementById("titelText");
title.innerHTML = "Welcome to lesson nr. 4";

let subtitle = document.createElement("h3"); //use this to create elements to be added to the main page (is not currently part of the page and you need to append it to the page)
subtitle.innerText = "this is the innerText <br>"; //this shows <br> as text because its innerText and not innerHTML

document.body.appendChild(subtitle);  //allows created elements to be seen/added in the website (appended)

