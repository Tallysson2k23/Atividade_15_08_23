//Calcule o produto dos números de 1 a 5 utilizando um loop do...while.
const prompt = require("prompt-sync")();
function repetir() {
  let i = 0;
  let ar = 1;
  while (i < 5) {
    i = i + 1;
    ar = ar * i;
  }
  console.log("O produto dos numeros de 1 a 5 é: ", ar);
  const resposta = prompt("Quer ver o calculo? s ou n: ");
if (resposta === "s") i = 0;
ar = 1;
while (i < 5) {
  i = i + 1;
  ar = ar * i;
  console.log(i, ar);
}
}


repetir();
