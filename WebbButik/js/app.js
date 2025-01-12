const button = document.getElementById("myButton");
const button2 = document.getElementById("myButton2");
const menuButton = document.getElementById("menuButton");

const body = document.querySelector("body");
const element = document.getElementById("testMenu");


button.addEventListener("click", (e) => {alert("Knappen klickades!")})
button.addEventListener("click", (e) => {body.style.backgroundColor = "red"})

button2.addEventListener("click", (e) => {body.style.backgroundColor = "yellow"})

menuButton.addEventListener("click", (e) => {element.classList.toggle("testMenuShow");})

