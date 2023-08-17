// 5 : Crie um loop que imprima a sequência de Fibonacci até o 10º termo.

let antant = 0
let antes = 1
let agora = 0

for (i=1; i<=10; i++){
    //console.log(i)
    agora=antes+antant;
    console.log(antes)
    antant = antes;
    antes = agora;


}

   1, 2,  3 
      2,  3,  5