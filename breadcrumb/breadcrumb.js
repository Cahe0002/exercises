const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  {
    name: "Vaskemaskiner",
    link: "/hvidevarer/vaskemaskiner",
  },
  {
    name: "Bosch",
    link: "/hvidevarer/vaskemaskiner/bosch",
  },
]; // arrays data

const breadCrumb = document.querySelector("#bshow"); // add the button #bshow

breadCrumb.addEventListener("click", showBreadCrumps); // addEventListener, when clicking breadCrumb.

function showBreadCrumps() {
  document.querySelector("ul").innerHTML = generateBreadCrumb(); // function runs and return HTML string.
}

function generateBreadCrumb() {
  let text = ""; // emty string there building up
  bc.forEach((item, index) => {
    //index is coming from forEach
    // item is the object, index is the position in the array

    const isFirst = index === 0; // is true when index only is 0.
    const isLast = index === bc.length - 1; // is true if where at the last object.
    // bc length is 3, there is 3 objects in the array ( last index is 3 - 1 = 2 )

    if (!isFirst) {
      // ! means if isFirst is not true
      text += `<span class="separator"> / </span>`; //adding the "/" with span
    }

    if (isLast) {
      text += `<li class="breadcrumb-item">${item.name}</li>`; // if the last item is true, add the li text without a-tag (Bosch)
    } else {
      text += `<li class="breadcrumb-item"><a href="${item.link}">${item.name}</a></li>`;
      // else the name from array(index 0, 1) gets wrapped in an a-tag, making Hvidevarer and Vaskemaskiner clickable.
    }
  });
  return text; // return the string, so showBreadCrumb can use it
}

//   bc.forEach((product) => {
//     console.log(`${product.name}`);
//   });

// +=
// forEach
// string litteral `${}``
// return
// innerHTML
// a tag

// function Lavstr() {
//   let str = "";
//   str += "hej";
//   str += "du";
//   return str;
// }

// console.log(Lavstr());


//How to close the button with ? and :
// function showBreadCrumps() { 
// const ul = document.querySelector("ul");
// ul.innerHTML = ul.innerHTML === "" ? generateBreadCrumb() : ""; }