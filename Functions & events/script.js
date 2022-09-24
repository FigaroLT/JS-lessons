// function alertName(name) {
//     alert(name);
// }
// alert('John');

// function generateRandomNumber() {

//     return Math.floor(Math.random() * 5 + 1);

// }
// console.log(generateRandomNumber());

// function getSum(name, surname) {
//     return name.length + surname.length;

// }
// console.log(getSum('Vladimir', 'Timaskov'));

// function althabetLetterByIndex(index) {
//     const althabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//     return althabet[index];
// }
// console.log(althabetLetterByIndex(11));

// function mathOp(n1, n2, operator) {
//     switch (operator) {
//         case 'sum': return n1 + n2;
//         case 'sub': return n1 - n2;
//         case 'div': return n1 / n2;
//         case 'multi': return n1 * n2;
//     }

// }
// console.log(mathOp(4, 5, 'multi'));

// function numGen() {
//     return Math.floor(Math.random() * 10 + 1);

// }
// function squareNum(number) {
//     return Math.pow(number, 2);

// }
// console.log(squareNum(numGen()));



// 2-3
// document.querySelector('button').addEventListener('click', () => alert('Vlad'));

// document.querySelector('button').addEventListener('click', () => { document.querySelector('p').innerText = 'Some text about me'; });



// 4
// let counter = 5;

// document.querySelector('button').addEventListener('click', () => {
//     counter++;
//     document.querySelector('h1').innerText = counter;
// });



// 5
// document.querySelector('p').addEventListener('copy', (event) => {
//     event.preventDefault();
//     alert("Copy restricted");
// });



// 6
// function numGenerator() {
//     return Math.floor(Math.random() * 100 + 1);

// }
// document.querySelector('button').addEventListener('click', () => {
//     const randomNumber = numGenerator();
//     document.querySelector('h1').innerText = randomNumber;
// })



// 7
// document.getElementById('valid').addEventListener('click', () => document.getElementById('output').innerText = 'Alus'
// );

// document.getElementById('nonValid').addEventListener('click', () => {
//     alert("Limonadas");
// });



// 8
// function generateNumber() {
//   return Math.floor(Math.random() * 3 + 1);
// }

// const randomNumber = generateNumber();
// console.log(randomNumber);

// document
//   .getElementById("One")
//   .addEventListener("click", () =>
//     randomNumber === 1 ? alert("Yay") : alert("Nay")
//   );
// document
//   .getElementById("Two")
//   .addEventListener("click", () =>
//     randomNumber === 2 ? alert("Yay") : alert("Nay")
//   );
// document
//   .getElementById("Three")
//   .addEventListener("click", () =>
//     randomNumber === 3 ? alert("Yay") : alert("Nay")
//   );


// 9
// document.body.addEventListener('click',(event)=>{
//     const isButton = event.target.nodeName === 'BUTTON';
// if (isButton){
//     document.querySelector('h2').innerText="I warned You!!!";
// }
// });



// 10

document.querySelector('h1').addEventListener('mousemove',()=>{
document.querySelector('h1').innerText="I said DON'T MOVE!!!";    
});