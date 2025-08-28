// console.log("FOR");
// for (let contadora = 1; contadora <= 5; contadora++) {

//   console.log(contadora);

// }

// console.log("WHILE");
// let contadoraWhile = 1;
// while (contadoraWhile <= 5) {

//   console.log(contadoraWhile);

//   contadoraWhile++;

// }

// console.log("DO WHILE SIMPLES");

// do {

//   console.log("Mostrou o valor na tela, ainda que a condição seja falsa.")

// } while (1 == 2);

// console.log("DO WHILE COMPLEXO");

// let operacao = "";
// do {

//   operacao = prompt("Qual operação deseja fazer?");

//   if (operacao != "+" &&
//       operacao != "-" &&
//       operacao != "*" &&
//       operacao != "/") {

//     alert("Operação inválida.");

//   }

// } while (operacao != "+" &&
//         operacao != "-" &&
//         operacao != "*" &&
//         operacao != "/");

// alert("Opção válida!");



// Exercicio 1

// debugger;

// for (let contadora = 1; contadora <=10; contadora++) {
  
//   console.log (contadora)

// }


//Exercicio 2

// debugger;

// let numero = Number (prompt ("Insira um numero"))


// for (contadora= 1; contadora <=10; contadora++) {

//   let resultado = numero*contadora

//   console.log (resultado)

// }

//Exercicio 3

debugger;

let numero = Number (prompt("Insira um numero"))

let contadora = 1

while (contadora<= numero) {
  
  let resultado = (contadora + 1)
  console.log (resultado)
  contadora++;

}

for (contadora= 1; contadora>numero; contadora++ ) {

  let resultado2 = numero + contadora

}