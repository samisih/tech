setInterval(showTime, 1000);

function showTime() {
  let time = new Date();
  let weekday = time.getDay();
  let weekdayName = ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"];
  let currentWeekDay = weekdayName[weekday];
  let currentYear = time.getFullYear();
  let currentMonth = time.getMonth();
  let days = time.getDate();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  sec = sec < 10 ? "0" + sec : sec;
  min = min < 10 ? "0" + min : min;
  hour = hour < 10 ? "0" + hour : hour;

  let currentTime = currentWeekDay + " " + days + "." + currentMonth + "." + currentYear + " " + hour + ":" +
    min + ":" + sec;

  document.getElementById("time")
    .innerHTML = currentTime;

}
showTime();