let time = document.querySelector('#time');
let closewelcomewindow = document.querySelector('#close-welcome');
let welcomescreen = document.querySelector('#welcome-screen');
let sidebar = document.querySelectorAll('.sidebar ul li a');
let taskbar = document.querySelectorAll('.taskbar .taskbar-apps .taskbar-icons');

 function updatetime () {
    let timetodisplay = new Date().toLocaleString();
    time.innerText = timetodisplay;

}
import { openElement } from "./modules/openElement.js";
import { dragElement } from "./modules/dragElement.js";
import { closeElement } from "./modules/closeElement.js";

taskbar.forEach((element) => openElement(element));

sidebar.forEach((element) => openElement(element));



updatetime();
closewelcomewindow.addEventListener('click' , () => closeElement(welcomescreen) );
setInterval(updatetime , 1000);