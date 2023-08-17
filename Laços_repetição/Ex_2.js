
// 2 : Calcule a soma dos números de 1 a 100 utilizando um loop (while)
const prompt = require ("prompt-sync")()
function repetir (){

let i=0
let j=0
while(i<100){
    i=i+1
    j=j+i
    //console.log(i,j)
}
console.log("A somas dos numero de 1 a 100 é: ",j)
const resposta = prompt ("Quer ver a soma de cada numero? s ou n: ")
if (resposta === "s")
i=0
j=0
while(i<100){
    i=i+1
    j=j+i
    console.log(i,j)
}


}
repetir();
