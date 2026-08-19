// console.log("HEJ VERDEN");
// document.querySelector(".myTest").textContent = "TRYK FOR TAL!";

"use strict";

let Container = document.querySelector("#Press");

Container.addEventListener("click", lavEtTal);

lavEtTal();

function lavEtTal() {
  console.log(Math.ceil(Math.random() * 100));
  Container.innerHTML = Math.ceil(Math.random() * 100); // Math.ceil = Uden decimaler //
}

// const value = "true";

// if (value) {
//   console.log("Value is truthy");
// } else { console.log ("Value is falsy");
// }
