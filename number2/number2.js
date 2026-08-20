const Input = document.querySelector("#choose");

Input.addEventListener("click", chooseNumber);

chooseNumber();

function chooseNumber() {
  console.log(Math.ceil(Math.random() * 100));
  Input.innerHTML = Math.ceil(Math.random() * 100);
}
