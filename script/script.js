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
updatetime();
setTimeout(showWelcomeScreen, 3000);
setInterval(updatetime , 1000);