const legalAge = 20;
const clientAge = 56;

if (clientAge >= legalAge) {
    console.log('true');
} else {
    console.log('false');
}

const nome = 'Vladimir';
if (nome.lenght > 6) {
    console.log("ilgesnis")
}
else {
    console.log("false")
}

const myAge = 40;
if (myAge < 0 && myAge > 100) {
    console.log('Invalid age');
}
else if (myAge < 18) {
    console.log("Child");

}
else (myAge < 99)
console.log("Adult");


const car = "Smart";
if (car === "VW" || car === "Audi" || car === 'Bentley' || car === 'Bugatti' || car === 'Lamborghini' || car === 'Porsche') {
    console.log("VW");
}
else if (car === 'BMW' || car === 'Mini' || car === 'Rolls-Royce') {
    console.log('BMW');
}
else console.log('nei vienam');