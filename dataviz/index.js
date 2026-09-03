const url = "https://kea-alt-del.dk/kata-distortion/";

function loadJSON(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => callback(jsonData));
}

loadJSON(url, loadNumber);

function loadNumber(jsonData) {
  const inQueue = jsonData.inQueue;
  console.log("inQueue", inQueue);
  document.getElementById("number").textContent = inQueue;
}

setInterval(() => {
  loadJSON(url, loadNumber);
}, 1000);
