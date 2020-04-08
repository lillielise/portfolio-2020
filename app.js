"use strict";

document.querySelector(".fas.fa-times").onclick = function (event) {
  document.querySelector(".pop-up-demo").style.display = "none";
  document.querySelector("#content").style.opacity = "1";
};

function handleDemoClick() {
  document.querySelector(".pop-up-demo").style.display = "flex";
  document.querySelector("#content").style.opacity = ".8";
}
