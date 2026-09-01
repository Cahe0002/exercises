const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

let isReplaced = false;
const textElement = document.getElementById("text");
const buttonClick = document.getElementById("updateButton");
const buttonClose = document.getElementById("closeButton");
const infoDialog = document.getElementById("infoDialog");

buttonClose.addEventListener("click", closeDialog);
buttonClick.addEventListener("click", replaceText);

function replaceText() {
  if (isReplaced) {
    infoDialog.showModal(); // showModal is a funtion for the Dialog HTML
    return;
  }
  let result = textElement.textContent;
  for (const { bad, good } of curseWords) {
    result = result.replaceAll(
      bad,
      "<span class='highlight'>" + good + "</span>",
    );
  }
  textElement.innerHTML = result;
  isReplaced = true;
}

function closeDialog() {
  infoDialog.close(); // closes the dialog
}

// else { 
// curseWords.forEach(function(word){
// text = text.replace (word.bad )})
//}
