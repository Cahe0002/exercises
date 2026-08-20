// const

// function moms(value, VAT = 1.25) {
//   console.log("Momsberegner");
// }

// moms();

function Momsberegner(value, vat = 25) {
  console.log(value + (vat / 100) * value);
}

Momsberegner(200);
