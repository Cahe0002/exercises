// // "use strict";

// const fullName = "Peter Heronimous Lind";

// const firstSpace = fullName.indexOf(" "); // " " means it´s finds the position of the first space
// const secondSpace = fullName.indexOf(" ", firstSpace + 1); // " ", firstSpace + 1

// const firstName = fullName.substring(0, firstSpace);
// const middleName = fullName.substring(firstSpace + 1, secondSpace);
// const lastName = fullName.substring(secondSpace + 1);

// console.log(firstName);
// console.log(middleName);
// console.log(lastName);

const fullName = "Peter Heronimous Lind";

const firstName = fullName.substring(0, fullName.indexOf(" "));
const middleName = fullName.substring(fullName.indexOf(" ") + 1);
const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);

console.log("firstName", `_${firstName}_`);
console.log("middleName", `_${middleName}_`);
console.log("lastName", `_${lastName}_`);

const splittedStr = fullName.split(" ");
console.log("splittedStr", splittedStr);
console.log(splittedStr.join(" * "));

// const myName = "KLAUS";
// console.log("3name", name.substring(0, 2).toLowerCase());
// console.log("3name", name.substring(2, 3).toUpperCase());
// console.log("3name", name.substring(3).toLowerCase());

// console.log(
//   "3name, name",
//   `${myName.substring(0, 2).toLowerCase()}${myName.substring(2, 3).toUpperCase()}${myName.substring(3).toLowerCase()}`,
// );

const myName = "CAROLINE";
const len = myName.length;

console.log(
  "3name, name",
  `${myName.substring(0, 3).toUpperCase()}${myName.substring(3, 4).toUpperCase()}${myName.substring(4).toLowerCase()}`,
);

console.log("myName", len);
