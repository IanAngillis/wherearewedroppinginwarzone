"use strict";

window.onload = attachHandlers;

function attachHandlers(){
    document.getElementById("dropButton").addEventListener("click", onDropButtonClick);
    console.log("eventhandlers attached");
}

//Positions on the warzone map
let positions =  ["Dam", 
"Military Base", 
"Quarry", 
"Airport", 
"Storage Town", 
"Superstore", 
"Boneyard", 
"Train Station", 
"Promenade West", 
"Promenade East", 
"Hills",
"TV Station",
"Hospital",
"Stadium",
"Lumber",
"Farmland",
"Downtown",
"Park",
"Port",
"Prison"]; 

function onDropButtonClick(){
    console.log("dropbutton was clicked");
    let positionIndex = getRandomArbitrary(0, positions.length);
    let dropResultParagraph = document.getElementById('dropResult');
    dropResultParagraph.innerHTML = positions[positionIndex];
}

function getRandomArbitrary(minValue, Maxvalue){
    return Math.round(Math.random() * (Maxvalue - minValue) + minValue);
}