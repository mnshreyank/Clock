let hrs = document.querySelector("#hrs");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

//digital clock fields
let hr = document.querySelector("#hr");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");
let ampm = document.querySelector("#am_pm");

setInterval(() => {
  let day = new Date();

  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;
  let am_pm;

  hrs.style.transform = `rotateZ(${hh}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;

  let hr_digi = day.getHours();
  let mins = day.getMinutes();
  let secs = day.getSeconds();

  hr_digi > 12 ? (am_pm = "PM") : (am_pm = "AM");
  hr_digi > 12 ? (hr_digi = hr_digi - 12) : hr_digi;

  hr_digi < 10 ? (hr_digi = "0" + hr_digi) : hr_digi;
  mins < 10 ? (mins = "0" + mins) : mins;
  secs < 10 ? (secs = "0" + secs) : secs;

  hr.innerHTML = hr_digi;
  minute.innerHTML = mins;
  second.innerHTML = secs;
  ampm.innerHTML = am_pm;
});
