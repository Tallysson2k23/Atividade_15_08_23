// 2 : Determine se um número é ímpar ou par utilizando uma estrutura if e o operador %.

const prompt = require ("prompt-sync")();
function repetir (){

    const numero = prompt("Informe um numero: ")
    if (numero%2 === 0){
    console.log("Numero é par")
}else if (numero%2 !== 0){
    console.log("Numero é impar")
}
const resposta = prompt("Quer digitar outro numero? s ou n: ")
    if (resposta === "s")
    repetir();
}
repetir();