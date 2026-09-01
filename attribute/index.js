// "use strict";

// document.querySelector("h1").addEventListener("click", h1Clicked);

// function h1Clicked(evt) {
//   if (evt.target.dataset.filter === "fox") {
//     evt.target.dataset.filter === "bat";
//   } else {
//     evt.target.dataset.filter = "fox";
//   }
// }

// const buttonSwitch = document.querySelector("button");

// buttonSwitch.addEventListener("click", clickSwitched);

// function clickSwitched() {}

("use strict");

document.querySelector("h1").addEventListener("click", h1Clicked);

function h1Clicked(event) {
  console.log("event.target", event.target);
  const currentFilter = event.target.dataset.filter;
  event.target.dataset.filter = currentFilter === "fox" ? "bat" : "fox";
}

// Easier way instead og if else
