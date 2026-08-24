// let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
// console.log(letters[4]); // Make the answer in console.log to "e"

// let newarr = letters;
// newarr[4] = "*";

// console.log(letters[4]);

const people = ["Harry", "Ron", "Hermione"];
let result;

result = people.push("Draco");

console.log("people", people);
console.log("result", result);

result = people.pop();

console.log("people", people);
console.log("result", result);

result = people.push("Neville");

console.log("people", people);
console.log("result", result);

result = people.push("Luna");

console.log("people", people);
console.log("result", result);

result = people.slice(0, 3);

console.log("people", people);
console.log("result", result);

result = people.slice(1, 0, "Cho");

console.log("people", people);
console.log("result", result);

people[1] = "Ginny";

console.log("people", people);
console.log("result", result);

result = people.push("Fred", "George");

console.log("people", people);
console.log("result", result);

result = people.indexOf("Fred");

console.log("people", people);
console.log("result", result);

result = people.slice(result, 1);

console.log("people", people);
console.log("result", result);

// function firedOrhired(action, person) {
//   action(person);
// }

// const person3 = {
//   firstName: "Harry",
//   lastName: "Potter",
//   hired: false,
// };

// const person4 = {
//   firstName: "Ron",
//   lastName: "Weasley",
//   hired: false,
// };

// console.log("person3", person3);
// firedOrhired(hired, person4);
// console.log("person4", person4);

// function hired(person) {
//   person.hired = true;
// }

// function fired(person) {
//   person.hired = false;
// }
