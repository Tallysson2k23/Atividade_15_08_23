// 2: Converta uma string para maiúsculas.

function repetir(){

const prompt = require("prompt-sync")();
let palavra = prompt("Digite uma palavra: ");
palavra =palavra.toUpperCase()
console.log(palavra)

const pergunta = prompt ("Quer digitar outra palavra? s ou n: ")
    if (pergunta==="s"){
        repetir();
    }
}
repetir();