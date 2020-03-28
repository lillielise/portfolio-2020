'use strict';

document.querySelector("#demo-petster-button").onclick = function (event) {
  var w = window.innerWidth;
  var h = window.innerHeight;
  console.log(w, h)
  document.querySelector(".pop-up-demo").style.display = "flex";
  document.querySelector("#content").style.opacity = ".5";
}

document.querySelector(".fas.fa-times").onclick = function (event) {
  document.querySelector(".pop-up-demo").style.display = "none";
  document.querySelector("#content").style.opacity = "1";
}