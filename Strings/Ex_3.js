// 3 : Remova os espaços em branco de uma string.


function repetir (){
const prompt = require("prompt-sync")();
const palavra = prompt("Digite uma frase: ")
semespaco = ""
for(letra of palavra){
    if(letra!==" "){
        semespaco = `${semespaco}${letra}`
    }
}
console.log(semespaco)

const pergunta = prompt ("Digitar outra frase? s ou n: ")
    if (pergunta === "s"){
        repetir();
    }

}
repetir();