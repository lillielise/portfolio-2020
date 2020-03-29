'use strict';

document.querySelector("#demo-petster-button").onclick = function (event) {
  document.querySelector(".pop-up-demo").style.display = "flex";
  document.querySelector("#content").style.opacity = ".5";
}

document.querySelector(".fas.fa-times").onclick = function (event) {
  console.log('hik')
  document.querySelector(".pop-up-demo").style.display = "none";
  document.querySelector("#content").style.opacity = "1";
}

document.querySelector(".project-card").ontouchstart = function (event) {
  if (window.innerWidth < 500) {
    document.querySelector(".project-card-inner").style.transform = "rotateY(180 deg)";
  }
}