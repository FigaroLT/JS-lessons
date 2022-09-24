const legalAge = 20;
const clientAge = 18;
const myName = "Vladimir";
const myAge = 41;
const car = "SAAB"
const count = 10;
let i = 10;
let combo = '';
let times = 5;
const firstElement = document.querySelector('li:nth-child(1)');
const secondElement = document.querySelector('li:nth-child(2)');

const bmw_group = firstElement.textContent;
const vw_group = secondElement.textContent;

firstElement.textContent = vw_group;
secondElement.textContent = bmw_group;

// if (clientAge >= legalAge) {
//     alert("Klientas pilnametis")
// } else {
//     alert("Klientas nepilnametis")

// }

// if (myName.length > 6) {
//     alert("Ilgas vardas")

// } else {

// }

// if (myAge < 0 && myAge > 100) {
//     alert("Invalid age")

// } else if (myAge > 0 && myAge < 18) {
//     alert("Child")

// }
// else if (myAge > 18 && myAge < 99) {
//     alert("Adult")
// }

// if (car === "VW", car === "Bugatti", car === "Audi", car === "Bentley", car === "Lamborghini", car === "Porsche") {
//     alert("Priklauso VW group")

// } else if (car === "BMW", car === "Mini", car === "Rolls-Royce") {
//     alert("Priklauso BMW group")

// }
// else {
//     alert("Nepriklauso nei vienai grupei")
// }

// switch (car) {
//     case 'VW':
//     case 'Audi':
//     case 'Bentley':
//     case 'Lamborghini':
//     case 'Porsche':
//         console.log("VW group");
//         break;
//     case 'BMW':
//     case 'Mini':
//     case 'Rolls-Royce':
//         console.log("BMW group");
//         break;
//     default:
//         console.log("Nepriklauso nei vienai grupei")
//         break;

// }
// console.log(myName.length < 5 ? "Short name" : "Long name");

// console.log(clientAge < legalAge ? "Can't drive" : "Can drive");

// clientAge < 0 || clientAge > 120 ? console.log("Ivalid age") : clientAge >= legalAge ? console.log("Can drive") : console.log("Can't drive");

// for (let i = 0; i < count; i++) {
//     console.log(myName);
// }
// for (let i = 0; i < 10; i++) {
//     console.log(myName);
// }
// for (let i = 0; i < 10; i++) {
//     console.log(`${i}.${myName}`);
// }
// while (i > 0) {
//     console.log(i);
//     i--;
// }

do {
    combo += myName;
    times--;
}
while (times > 0) {
    console.log(combo);
}

// console.log(Math.cos(0));

// console.log(Math.floor(Math.random() * 5) + 1);

// console.log(Math.floor(Math.random() * (12 - 5 + 1)) + 5);

// const randomNumber = Math.floor(Math.random() * 5) + 1;
// if (randomNumber === 3) {
//     alert("You win");
// } else {
//     alert("Try next time");
// }

const h2 = document.createElement('h2');
h2.textContent = myName;
document.body.append(h2);

document.getElementById('anyname').textContent = myName;

// document.querySelector('li:last-child').textContent = "Suris";

// document.querySelector('.bluetext>span').textContent = 'blue';


