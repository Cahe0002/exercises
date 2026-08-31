// const car = {
//   numberWheel: 3,
//   color: "purple",
// };

// let prop = "color";

// console.log("Colour of car", car.color);
// console.log("Colour of car", car[color]); // hard brackets
// console.log("Colour of car", car[prop]);

let person1 = {
  firstName: "Klaus",
  age: 59,
  student: false,
};

console.log(person1.lastName);

person1.Lastname = "Mandal";

console.log(person1.lastName);

person1.Lastname = undefined;
console.log("person1.lastName:", person1.lastName);

console.log("person.middleName:", person1.middleName);

delete person1.lastName;

console.log("person1.lastName:", person1.lastName);
