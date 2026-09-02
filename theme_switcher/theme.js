"use strict";

document.querySelector("select").addEventListener("click", themeSelect);

function themeSelect(event) {
  document.body.dataset.theme = event.target.value;
  // document.body - to get the data-attribute from body, so you can choose select for theme (data-theme)
}

// document.querySelector("select").addEventListener("click", themeSelect);

// function themeSelect(event) {
//   console.log("event.target", event.target);
//   const currentTheme = event.target.dataset.theme;
//   event.target.dataset.theme = currentTheme === "light" ? "hawaii" : "light";
// }

// function h1Clicked(evt) {
//   if (evt.target.dataset.filter === "fox") {
//     evt.target.dataset.filter === "bat";
//   } else {
//     evt.target.dataset.filter = "fox";
//   }
// }
