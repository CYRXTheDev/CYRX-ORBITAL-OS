let time = document.querySelector('#time');
let closewelcomewindow = document.querySelector('#close-welcome');
let welcomescreen = document.querySelector('#welcome-screen');
 function updatetime () {
    let timetodisplay = new Date().toLocaleString();
    time.innerText = timetodisplay;

}
import { dragElement } from "./modules/dragElement.js";
import { closeElement } from "./modules/closeElement.js";
updatetime();
closewelcomewindow.addEventListener('click' , () => closeElement(welcomescreen) );
setInterval(updatetime , 1000);