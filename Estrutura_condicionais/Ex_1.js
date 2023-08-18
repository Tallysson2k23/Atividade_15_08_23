//Imprima os números de 1 a 50, mas para múltiplos de 3 imprima "Sof" e para múltiplos de 5 imprima "Tex".
const prompt = require ("prompt-sync")();
 function repetir (){
    
for (let i=1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log("Sof");
    } else if (i % 5 === 0) {
        console.log("Tex");
    } else {
        console.log(i);
    }
}
const resposta = prompt ("Quer repetir? s ou n?: ");
    if (resposta === "s"){
        repetir()
    }
 }
repetir()