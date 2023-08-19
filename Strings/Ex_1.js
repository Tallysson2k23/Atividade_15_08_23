//C 1 : onte quantas vogais há em uma string

function repetir (){
const prompt = require("prompt-sync")();
const palav = prompt("Digite uma palavra: ")
function qtddvogais(palavra){
    let vogais = 0;
    for(letra of palavra){
        if(letra==="a" || letra==="e" || letra==="i" || letra==="o"||letra==="u"){
            vogais = vogais+1
        }
    }
    console.log(`Em ${palavra} tem ${vogais} vogais`)
}
qtddvogais(palav)

const pergunta = prompt ("Quer digitar outra palavra? s ou n: ")
    if (pergunta === "s"){
        repetir();
    }    
}
repetir();