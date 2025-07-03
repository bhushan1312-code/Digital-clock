let timezone = "Asia/Kolkata"


function updateTime() {
  const select = document.getElementById("country");
  timezone = select.value;
}

setInterval(() => {
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  document.getElementById("head").innerHTML = time;
}, 1000);
