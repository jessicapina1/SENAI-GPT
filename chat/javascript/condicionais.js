//Exercicio 1

// let idade = prompt("Qual a sua idade?");

// if (idade >= 18) {alert ("Voce e maior de idade!")


// }
// else { alert ("Va pra Super Nanny")


// } 


// Exercicio 2

// let numero = prompt ("Insira um numero");

// if (numero >= 0) { alert ("Numero positivo")

// }

// else { alert ("Numero negativo")}


//Exercicio 3

// let nota = prompt ("Digite a nota do aluno")

// if (nota >= 60) { alert ("Aprovado")}
// else { alert ("Reprovado")}

//Exercicio 4

// let numero = prompt ("Digite um numero")

// if (numero >0) { 
//     alert ("numero positivo")


// } else { 


//     if (numero == 0) {
//         alert ("nulo")
//     } else { alert ("numero negativo")}
// }

//Exercicio 5

// let idade = prompt("Qual a sua idade?")
// if (idade >= 18) {alert ("voce e um Adulto")}
// if (idade <= 12 && idade >= 0) {alert ("voce e uma Crianca")}
// if (idade >=13 && idade <= 17) {alert ("voce um adolescente")}
// if (idade <0) {alert ("idade invalida")}

//Exercicio 6

// let numero = prompt ("Insira um numero")

// if (numero %2==0) {alert ("O numero e par")

// } else { alert ("O numero e impar")}


//Exercicio Inter 1

// let num = Number (prompt ("Digite um numero"));
// let seg = Number (prompt ("Digite outro numero"));
// let operacao = prompt ("Escolha a operacao a ser realizada");


// if (operacao=="+") {

//     let resultado = num+seg
//     alert (resultado)

// } if (operacao =="-") {

//     let resultado = num-seg
//     alert (resultado)

// } if (operacao =="/") {

//     let resultado = num/seg
//     alert (resultado)


// } if (operacao =="*") {

//     let resultado = num*seg
//     alert (resultado)}


//Exercicio Inter 2

// let first = Number(prompt ("Primeiro numero"));
// let second = Number (prompt ("Segundo numero"));
// let third = Number (prompt ("Terceiro numero"))

// if (first > second && first > third) { alert (first)}

// if (second > third && second > first) {alert (second)}

// if (third > first && third > second) {alert (third)}


//Exercicio Inter 3

// let valor = prompt ("Valor da compra")

// if (valor>=100) {alert (valor*0.9)

// } else {alert (valor)}


//Exercicio Inter 4

// let usuario = prompt ("Digite o usuario")
// let senha = prompt ("Insira a senha")

// if (usuario == "admin" && senha == 1234) {alert ("Login bem sucedido")

// } else {alert ("Acesso negado")}

//Exercicio Avancado 1

// let lado1 = prompt ("Lado 1")
// let lado2 = prompt ("Lado 2")
// let lado3 = prompt ("Lado 3")


// if (lado1 == lado2 && lado1==lado3 && lado2==lado3) {alert ("Triangulo Equilatero")}

// if (lado1 == lado2 && lado1 !== lado3) {alert ("Triangulo Isoceles")}
// if (lado1 == lado3 && lado1 !== lado2) {alert ("Triangulo Isoceles")}
// if (lado2 == lado3 && lado2 !== lado1) {alert ("Triangulo Isoceles")}

// if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3) {alert ("Triangulo Escaleno")}



//Exercicio Avancado 2

// let nota = prompt ("Insira a nota")

// if (nota>0 && nota <60) {alert ("Nota F")}
// if (nota<70 && nota>=60) {alert ("Nota D")}
// if (nota<80 && nota>=70) {alert ("Nota C")}
// if (nota<90 && nota>=80) {alert ("Nota B")}
// if (nota>=90 && nota<=100) {alert ("Nota A")}



//Exercicio Avancado 3

// let peso = Number (prompt ("Insira seu peso"))
// let altura = Number (prompt ("Insira sua altura"))

// let imc = peso/(altura*altura)

// if (imc< 18.5) {alert ("Abaixo do peso")}
// if (imc>= 18.5 && imc<25) {alert ("Peso Normal")}
// if (imc>=25 && imc<30) {alert ("Sobrepeso")}
// if (imc>=30) {alert ("Obesidade")}


// Exercicio Avancado 4

let ano = Number(prompt("insira um ano"))

let result = ano % 4
let result2 = ano % 100
let result3 = ano % 400

if (result == 0 && result3 == 0) {
  alert("ano bissexto")
  } else if (result == 0 && result2 !== 0) {alert ("ano bissexto")
  } else {alert ("ano normal")}


