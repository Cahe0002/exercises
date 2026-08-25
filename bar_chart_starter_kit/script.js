const list = document.querySelector("ul");
const arrayValue = [];

function generateColumns() {
  const randomNum = Math.floor(Math.random() * 101);
  arrayValue.push(randomNum);
  const li = document.createElement("li");
  li.style.setProperty("--height", randomNum);
  list.appendChild(li);

  if (arrayValue.length > 20) {
    // console.log("Array er 20");
    arrayValue.shift();
    list.removeChild(list.firstElementChild);
  }
  console.log("li", arrayValue);
}

setInterval(generateColumns, 500);


