// 4: Verifique se um número é primo ou não.

function repetir (){
function primoounao(n){
    primo = true;
    for(i=parseFloat(n)-1;i>1;i=i-1){
        if(parseFloat(n)%i===0){
            primo=false;
        }
    }
    if(primo===true){
        console.log(`${n} é primo`)
    }else{
        console.log(`${n} não é primo`)
    }
}
const prompt = require("prompt-sync")();
const numero = prompt("Digite um número: ")
primoounao(numero)

const pergunta = prompt("Quer saber se outro numero é primo ou nao? sim ou nao: ")
    if (pergunta === "sim"){
        repetir();
    }
}
repetir();