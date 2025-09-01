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

  console.log (resultado2)

}


// let numero = Number(prompt("Insira um numero"))

// let contadora= 0;


// let resultado = 0;

// for (contadora= 1; contadora <= numero; contadora++) {
//   resultado = resultado+contadora;
//   //console.log(contadora);
//   console.log(resultado);
// }

// console.log("resultado final: " +resultado);

//let i =0;

// for (i=0; i<= 50; i++){
//   if(i%2 == 0) {
//     console.log (i);
//   }
// }

//=========================================================
// let contadoraWhile = 5;
// while (contadoraWhile >= 1) {

//   console.log(contadoraWhile);

//   contadoraWhile--;

// }

// let contadoraWhile = Number(prompt("Insira um numero"));

// while (contadoraWhile >= 0) {
//   console.log(contadoraWhile);
//   contadoraWhile = contadoraWhile -1;
//   //   contadoraWhile--;
//   // contadoraWhile -= 1;

// }

// const aleatorio = Math.floor(Math.random() * 5) + 1;
// let numero = Number(prompt("Adivinhe o numero"));

// while (numero != aleatorio) {
//   if (numero > aleatorio) {
//     alert("Foi maior!")
//   }
//   else if (numero < aleatorio) {
//     alert("Foi menor!")
//   }
 

//   numero = Number(prompt("Adivinhe o numero"));


// }
//     alert("BRINDE")






// const aleatorio = Math.floor(Math.random() * 5) + 1;
// let numero = Number(prompt("Adivinhe o numero"));
// let jogar = true;

// while (jogar) {
//   if (numero > aleatorio) {
//     alert("Foi maior!");
//     numero = Number(prompt("Adivinhe o numero"));
//   }
//   else if (numero < aleatorio) {
//     alert("Foi menor!");
//     numero = Number(prompt("Adivinhe o numero"));
//   } else {
//     alert("BRINDE");
//     jogar = false;
//   }
 
//}
  
//=========================================================

let numeroTexto = "123";
listCaracteres =numeroTexto.split(CharacterData);
 bla = ["1","2", "3"];
 

console.log(listCaracteres);
  

