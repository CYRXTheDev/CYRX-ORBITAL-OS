let time = document.querySelector('#time');
let closewelcomewindow = document.querySelector('#close-welcome');
let welcomescreen = document.querySelector('#welcome-screen');
let sidebar = document.querySelectorAll('.sidebar ul li a');
let taskbar = document.querySelectorAll('.taskbar .taskbar-apps .taskbar-icons');

 function updatetime () {
    let timetodisplay = new Date().toLocaleString();
    time.innerText = timetodisplay;

}
import { dragElement } from "./modules/dragElement.js";
import { closeElement } from "./modules/closeElement.js";

taskbar.forEach((element) => {
    element.addEventListener('click' , () => {
        element.classList.remove('hide');
    })
})

sidebar.forEach((element) => {
element.addEventListener('click' , () => {
    element.classList.remove('hide');
})
})


updatetime();
closewelcomewindow.addEventListener('click' , () => closeElement(welcomescreen) );
setInterval(updatetime , 1000);