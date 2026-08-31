const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

const languageSelect = document.querySelector("#language-select");

const locale = "da"; // start in "de"

function changeLanguage(locale) {
  const selectedLanguage = texts[locale].texts; // if locale is "de" or "da" in [locale]
  selectedLanguage.forEach((value) => {
    // for each value.location (.header and footer)
    const select = document.querySelector(value.location);
    if (select) {
      select.textContent = value.text; // if select (value.location) = select.textContent(HTML text) = value.text(Das Bot or Båden)
    }
  });
}

changeLanguage("da"); // Starting at "de"

languageSelect.addEventListener("change", () => {
  // "change" function like click and input () => Arrow function. Short way to write a function
  changeLanguage(languageSelect.value); // EventListener for languageSelect ("change") to the value
});

// console.log(document.querySelector(header));
// header.innerHTML(texts[locale].texts[0].text);

// console.log(texts[locale].texts[0].text);
// console.log(texts.de.texts[0].text);
// console.log(document.querySelector(".header"));

//Enum tilføje flere sprog uden at ændre koden
//forEach - Array

// const languageSwitcher = document.querySelector("#language-select");

// languageSwitcher.addEventListener("change", (event) => {
//   changeLanguage(event.target.value);
// });

// const locale = "de";

// function changeLanguage(locale) {
//   const selectedLanguage = texts[locale].texts;

//   selectedLanguage.forEach((item) => {
//     const element = document.querySelector(item.location);
//     if (element) {
//       element.textContent = item.text;
//     }
//   });
// }

// changeLanguage(locale);
