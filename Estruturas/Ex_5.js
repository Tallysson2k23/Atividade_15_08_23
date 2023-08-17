// 5 : Verifique se uma string é um palíndromo (lê-se da mesma forma de trás para frente)

const prompt = require ("prompt-sync")();

let letras = []

let nome = prompt("Digite um nome: ")

for (i of nome){
    letras.push(i);
}
console.log(letras)
let contra = []
for(i=letras.length-1;i>=0;i=i-1){
    //console.log(letras[i])
    contra.push(letras[i])
}
console.log(contra)
let verdd = true;
for (i=0; i<=letras.length-1; i++){
    if (letras[i] !== contra[i]){
        verdd = false
    }
}
if (verdd === true){
    console.log("É palindromo")
}else(
    console.log("nao é palindromo")
)