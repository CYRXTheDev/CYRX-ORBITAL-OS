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
drageElement(document.getElementById('welcome'));
function dragElement(element){
  let initialX = 0 , initialY = 0;
  let currentX = 0 , currentY = 0;
  let drag = document.getElementById(element.id + 'header');
  if(drag){
    drag.onmousedown = startDragging;
  } else{
    element.onmousedown = startDragging;
  }

  function startDargging(e){
    e.preventDefault;
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = moveElement;
  }
   

  function moveElement(e){
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;

    initialX = e.clientX
  }

}
updatetime();
setTimeout(showWelcomeScreen, 3000);
setInterval(updatetime , 1000);