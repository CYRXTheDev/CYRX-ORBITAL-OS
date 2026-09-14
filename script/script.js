let time = document.querySelector('#time');
 function updatetime () {
    let timetodisplay = new Date().toLocaleString();
    time.innerText = timetodisplay;

}
updatetime();
setInterval(updatetime , 1000);