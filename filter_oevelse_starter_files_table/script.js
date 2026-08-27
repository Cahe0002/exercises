const vehicles = [
  {
    type: "Bus",
    fuel: "Diesel",
    passengers: 45,
    stops: ["Nørrebrogade", "Elmegade"],
  },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 0,
    ownedBy: "Jonas",
    isElectric: true,
  },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 2,
    ownedBy: "Vingegård",
    isTandem: true,
  },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

// const filterActive = document.querySelector("#filter button").dataset.filter;
// console.log(filterActive);

// function isElectricAndOwnedByJonas(vehicle) {
//   return vehicle.isElectric === true && vehicle.ownedBy === "Jonas";
// }

// const ownedByJonas = vehicles.filter(isElectricAndOwnedByJonas);

// console.log(ownedByJonas);

const filterBtn = document.querySelectorAll(".filter_btn"); // select all filter buttons(Nodelist)
filterBtn.forEach((btn) => {
  btn.addEventListener("click", filterActive);
});

const tbodyPointer = document.querySelector("tbody");

const electricVehicles = vehicles.filter((vehicle) => vehicle.isElectric);

const twoSeats = vehicles.filter((vehicle) => vehicle.passengers > 2);

const electricJonas = vehicles.filter(
  (vehicle) => vehicle.isElectric === true && vehicle.ownedBy === "Jonas", // && means "and" if both are true
);

const fuelMoreThanOne = vehicles.filter(
  (vehicle) => vehicle.fuel === "Rugbrød" && vehicle.passengers > 1, // > 1 (Bigger than)
);

function filterActive(e) {
  // e = click event
  const filter = e.currentTarget.dataset.filter;

  if (filter === "all") showTheseVehicles(vehicles);
  else if (filter === "electric") showTheseVehicles(electricVehicles);
  else if (filter === "two") showTheseVehicles(twoSeats);
  else if (filter === "jonas") showTheseVehicles(electricJonas);
  else if (filter === "ryebread") showTheseVehicles(fuelMoreThanOne);
}

// showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = ""; // reset button, before adding new rows
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel ?? ""}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops ? each.stops.join(", ") : ""}</td>
  <td>${each.ownedBy ?? ""}</td>
  <td>${each.isElectric ? "X" : ""}</td>
  <td>${each.isTandem ? "X" : ""}</td>
</tr>`;
  });
}

showTheseVehicles(vehicles); // show all array to start with

// Join returns a new string

// Nullish coalescing operator (??)
// "use a if it exists (isn't null or undefined), otherwise use b."
