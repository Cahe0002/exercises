const myColor = document.getElementById("myColor"); // getting the id element from html

document.addEventListener("mousemove", colorChange); // every time mouse move, call the function colorChange

function colorChange(event) {
  const x = (event.clientX / window.innerWidth) * 100; // left to right 
  const y = (event.clientY / window.innerHeight) * 100; // top to bottom
  myColor.style.setProperty("--light", `${x}%`);
  myColor.style.setProperty("--sat", `${y}%`);
}
