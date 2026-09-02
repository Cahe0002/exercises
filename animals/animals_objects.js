"use strict";

window.addEventListener("DOMContentLoaded", start); //start is a callback

const Animal = {
  // shape for the object
  name: "",
  desc: "",
  type: "",
  age: 0,
};

const allAnimals = []; // empty array to use later

function start() {
  // the HTML is starting to load the page, with the function start
  console.log("ready");

  loadJSON(); // loading the function loadJSON, to get the data
}

function loadJSON() {
  fetch("animals.json") // fetch the animals.json array
    .then((response) => response.json()) // once you get a response back, return it some usable JSON data
    .then((jsonData) => {
      // when that´s done, take the jsonData and give it to the function prepareObjects, to clean it up
      // when loaded, prepare objects
      prepareObjects(jsonData); // function for jsonData
    });
}

function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
    // forEach item in the list of the raw data (animals.json) do this step
    const animal = Object.create(Animal); // creates new animal object from the const Animal - the starting point
    const texts = jsonObject.fullname.split(" "); // making a const texts with the json data and split the fullname, so there is space between the words
    // Example the array "Mandu the amazing cat" is going to split to ["Mandu", "the", "amazing", "cat"]
    // the const object animal, that has created the shape Animal.
    animal.name = texts[0]; // "Mandu"
    animal.desc = texts[2]; // "amazing" // texts[1] is ignored, to delete "the" in the array.
    animal.type = texts[3]; // "cat"
    animal.age = jsonObject.age; // age 10
    allAnimals.push(animal); // push adds the const = animal into the empty allAnimals array
  });
  console.log("allAnimals", allAnimals);
  displayList(); // set the function displayList() Which is showing the animals
}

function displayList() {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  allAnimals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document
    .querySelector("template#animal")
    .content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}

//FIRST TRY CODE

// const animal = Object.create(allAnimals);
// Object.create() creates new object.

// TODO: Create new object with cleaned data - and store that in the allAnimals array
// TODO: MISSING CODE HERE !!!
