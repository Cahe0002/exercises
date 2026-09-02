"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
};

const currentSettings = {
  filter: "*",
  sort: "name",
};

function start() {
  console.log("ready");
  const filterBtn = document.querySelectorAll("button");
  filterBtn.forEach((btn) => {
    btn.addEventListener("click", filterActive);
  });

  // TODO: Add event-listeners to filter and sort buttons

  loadJSON();
}

function filterActive(event) {
  const filter = event.currentTarget.dataset.filter; // currentTarget is the current button, dataset is the data-filter on HTML
  currentSettings.filter = filter; // currentSettings = object filter and sort.filter = filter
  const filtered =
    filter === "*"
      ? allAnimals
      : allAnimals.filter((animaltype) => animaltype.type === filter);
  // ternary short if else. If filter "*" ? = true - show allAnimals
  // else it is looping through the allAnimals and keeps only the ones whose type matches filter.
  // is filter === "*"? ("cat" === "*" → false), so we go into the .filter() branch instead
  // Inside .filter(), for each animal: animaltype.type === filter (e.g. "cat" === "cat" → true, keep it) or (e.g. "dog" === "cat" → false, remove it)
  displayList(filtered);
}

// Test for button working in console.log()

//   if (filter === "cat") {
//     console.log("CAT IS RIGHT");
//   } else if (filter === "dog") {
//     console.log("DOG IS RIGHT");
//   } else {
//     filter === "*";
//     console.log("ALL IS RIGHT");
//   }

async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  allAnimals = jsonData.map(preapareObject);

  // TODO: This might not be the function we want to call first
  displayList(allAnimals);
}

function preapareObject(jsonObject) {
  const animal = Object.create(Animal);

  const texts = jsonObject.fullname.split(" ");
  animal.name = texts[0];
  animal.desc = texts[2];
  animal.type = texts[3];
  animal.age = jsonObject.age;

  return animal;
}

function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
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
