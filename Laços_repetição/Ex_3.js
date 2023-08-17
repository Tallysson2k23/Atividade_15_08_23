//Imprima os números pares de 0 a 20 utilizando um loop (for)

const prompt = require ("prompt-sync")();

function repetir(){
    for (i=0; i<=20; i=i+2)
    console.log(i)
const resposta = prompt("Quer repetir os numeros? s ou n: ")
if (resposta === "s")
repetir();

}
repetir();