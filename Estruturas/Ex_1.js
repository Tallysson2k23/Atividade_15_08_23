//Verifique se um número é positivo, negativo ou zero usando declarações if, else if e else.


const prompt = require ("prompt-sync")();

function repetir (){

const numero = prompt ("Digite um  nuemro: ")
    if (numero<0){
        console.log("Numero informado é NEGATIVO!");
    }else if (numero>0){
        console.log("Numero informado é POSITIVO!");
    }else if (numero==="0"){
        console.log("Numedo informado é 0");
    }

const resposta = prompt ("Quer digitar outro numero? s ou n: ")
    if (resposta === "s")
    repetir();
}
repetir();