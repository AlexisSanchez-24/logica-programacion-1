const prompt = require('prompt-sync')();

function solicitarNumero(mensaje) {
    let numero;
    do {
        numero = prompt(mensaje);
        numero = Number(numero); 
    } while (isNaN(numero)); 
    return numero;
}

let numero1 = solicitarNumero("Introduce el primer número:");
let numero2 = solicitarNumero("Introduce el segundo número:");
let numero3 = solicitarNumero("Introduce el tercer número:");

let numeros = [numero1, numero2, numero3];
numeros.sort((a, b) => b - a); 

console.log("Números de mayor a menor:");
console.log(numeros.join(", "));

numeros.reverse(); 
console.log("Números de menor a mayor:");
console.log(numeros.join(", "));

let mayor = numeros[2];
let centro = numeros[1];
let menor = numeros[0];

console.log(`Número mayor: ${mayor}`);
console.log(`Número del centro: ${centro}`);
console.log(`Número menor: ${menor}`);

if (numero1 === numero2 && numero2 === numero3) {
    console.log("Todos los números son iguales.");
}