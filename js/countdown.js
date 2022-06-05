const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const matchDayTime = new Date(`June 22 2022 00:00:00`);

function ConutDown(){
  const currentTime = new Date();
  const diff = matchDayTime - currentTime;

  const d = Math.floor(diff  / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff  / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff  / 1000 / 60 ) % 60;
  const s = Math.floor(diff  / 1000 ) % 60;
  
  day.innerHTML = d;
  hour.innerHTML = h < 10 ? '0' + h : h;
  minute.innerHTML = m < 10 ? '0' + m : m;
  second.innerHTML = s < 10 ? '0' + s : s;
}
setInterval(ConutDown, 1000);