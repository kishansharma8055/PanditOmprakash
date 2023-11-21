let now = new Date();

var hour = now.getHours();
var minute = now.getMinutes();
var t = (hour + ":" + minute);

let day = now.getDate();
let month = now.getMonth();
let year = now.getFullYear();

let d = (day + "/" + (month + 1) + "/" + year);

time.innerHTML = t;
date.innerHTML = d;



var t = new Date();
panchang.calculate(t, function () {
  document.getElementById("day").innerHTML = panchang.Day.name;
  document.getElementById("tithi").innerHTML = panchang.Tithi.name;
  document.getElementById("nakshtra").innerHTML = panchang.Nakshatra.name;
  document.getElementById("karna").innerHTML = panchang.Karna.name;
  document.getElementById("yoga").innerHTML = panchang.Yoga.name;
  document.getElementById("raasi").innerHTML = panchang.Raasi.name;
  document.getElementById("ayanamsa").innerHTML = panchang.Ayanamsa.name;
});