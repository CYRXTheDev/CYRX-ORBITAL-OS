let time = document.querySelector('#time');
let welcomeScreen = document.querySelector('.welcome-screen');
 function updatetime () {
    let timetodisplay = new Date().toLocaleString();
    time.innerText = timetodisplay;

}
function showWelcomeScreen() {
  if(welcomeScreen){
  welcomeScreen.classList.add('hide');
  }
}
// dragElement(document.getElementById('welcome-screen'));
// function dragElement(element){
//   let initialX = 0 , initialY = 0;
//   let currentX = 0 , currentY = 0;
//   let drag = document.getElementById(element.id + 'header');
//   if(drag){
//     drag.onmousedown = startDragging;
//   } else{
//     element.onmousedown = startDragging;
//   }

//   function startDragging(e){
//     e.preventDefault();
//     initialX = e.clientX;
//     initialY = e.clientY;
//     document.onmouseup = stopDragging;
//     document.onmousemove = moveElement;
//   }
   

//   function moveElement(e){
//     currentX = initialX - e.clientX;
//     currentY = initialY - e.clientY;

//     initialX = e.clientX;
//     initialY =  e.clientY;

//     element.style.top = (element.offsetTop - currentY) + 'px';
//     element.style.left = (element.offsetLeft - currentX) + 'px';
//   }
//  function stopDragging(){
//   document.onmousemove = null;
//   document.onmouseup = null;
//  }
// }
updatetime();
setTimeout(showWelcomeScreen, 3000);
setInterval(updatetime , 1000);