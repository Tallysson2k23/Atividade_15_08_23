// 3 : Verifique se um ano é bissexto (divisível por 4 e não por 100, a menos que seja divisível por 400).

const prompt = require ("prompt-sync")();

function repetir(){
const ano = prompt("Digite um ano: ")
     if(ano%400 === 0){
        console.log("O ano é BISSEXTO")
     }else if(ano%4 === 0 && ano%100 !== 0){
        console.log("O ano é BISSEXTO")
     }
     else {
        console.log("O ano NAO é bissexto")
     }
const resposta = prompt("Quer digitar outro ano? s ou n: ")
     if (resposta === "s"){
        repetir();
     }
    }
    repetir();