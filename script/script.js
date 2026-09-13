let time = document.querySelector("#time");

function updatetime() {
  let now = new Date();

  // Format The Date: "Sep 13, 2026"
  let dateString = now.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // Format ng Time (12-hour with AM/PM, walang seconds): "10:45 PM"
  let timeString = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  // Date and Time connection
  time.innerText = `${dateString}  ${timeString}`;
}

updatetime();
setInterval(updatetime, 1000);

const wifiIcon = document.querySelector("#wifi-status");
