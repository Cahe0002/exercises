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
const tbodyPointer = document.querySelector("tbody");

// const electricVehicles = vehicles.filter((vehicle) => vehicle.isElectric);
const electricVehicles = vehicles.filter(
  (vehicle) => vehicle.fuel === "Benzin",
);

const twoSeats = vehicles.filter((vehicle) => vehicle.passengers > 2);

const electricJonas = vehicles.filter(
  (vehicle) => vehicle.isElectric === true && vehicle.ownedBy === "Jonas", // && means "and" if both a true
);

const fuelMoreThanOne = vehicles.filter(
  (vehicle) => vehicle.fuel === "Rugbrød" && vehicle.passengers > 1, // > 1 (Bigger than)
);

showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
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

// Join returns a new string

// Nullish coalescing operator (??)
// "use a if it exists (isn't null or undefined), otherwise use b."
