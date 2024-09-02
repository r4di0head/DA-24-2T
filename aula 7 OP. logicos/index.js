
 /*            Operadores Logicos.   aula 7               
                   
                   // Exemplos  && 

  const primeiroValor = true
const segundoValor = false

const resultado = primeiroValor&&
segundoValor

console.log(resultado) 

                   Exercicios

const a = true
const b = false
const c = true

const resultado = a && b
console.log(resultado)          (false) 

const resultado = b && c
console.log(resultado)          (false)

const resultado = a && c
console.log(resultado)           (true) 

const resultado = a && b && c
console.log(resultado)           (false) */

// Exemplos ||

/*const primeiroValor = true
const segundoValor = true
const resultado = primeiroValor || 
segundoValor
console.log(resultado) */
//   Exercicios


/*const a = true
const b = false
const c = true

//const resultado = a || b (false)

//const resultado = b || c (true)

//const resultado = a || c   (true)

//const resultado = a || b || c (true)
console.log(resultado) */

 // Exemplos (! NOT)

/* const primeiroValor = true
const resultado = !primeiroValor
console.log(resultado)*/


/*let nome = prompt("digite seu nome:");
console.log("nome:", nome);

let anoNascimento = prompt("digite seu ano de nascimento:")
let anoAtual = prompt("digite o ano atual")

let idade = anoAtual - anoNascimento;
console.log("idade",idade)

let maiorIdade = idade>= 18;
let idade2050 = 2050 - anoNascimento;


console.log("maior de idade" + maiorIdade);
console.log("idade em 2050"+   idade2050 + "anos")*/
/*
const bool1 = true
const bool2 = false
const bool3 = !bool2 
 //o  operadores Logico ! antes da variavel bool2 foi usado para dar o valor contrario da bool2 para a bool12 que nao foi definida como true ou false.

let resultado = bool1 && bool2 
//&&  operadores Logico para retornar "true" apenas se todas forem verdadeiras, nesse caso no console isso daria false
console.log("a. ", resultado) //console.log em todos os exemplos abaixo para imprimir o codigo.

resultado = bool1 && bool2 && bool3 
// mesma coisa, porem com uma variavel a mais no exemplo
console.log("b. ", resultado)

resultado = !resultado && (bool1 || bool2) 
// ! novamente para contrariar transformando false em true, e entao resolvemos primeramente o que ha dentro dos parenteses, || sera false SÓ se todas forem false, o que nao é o caso, ficando como true
console.log("c. ", resultado)

console.log("d. ", typeof resultado) 
// typeof para revelar o tipo da variavel resultado, uma boolean por causa do false e true.


 //               Operadores Logicos.   aula 7               
                   
                   // Exemplos  && 

/*  const primeiroValor = true
const segundoValor = false

const resultado = primeiroValor&&
segundoValor

console.log(resultado) */

/*                    Exercicios

const a = true
const b = false
const c = true

const resultado = a && b
console.log(resultado)          (false) 

const resultado = b && c
console.log(resultado)          (false)

const resultado = a && c
console.log(resultado)           (true) 

const resultado = a && b && c
console.log(resultado)           (false) */

   // Exemplos ||

/*const primeiroValor = true
const segundoValor = true
const resultado = primeiroValor || 
segundoValor
console.log(resultado) */

//   Exercicios


/*const a = true
const b = false
const c = true

//const resultado = a || b (false)

//const resultado = b || c (true)

//const resultado = a || c   (true)

//const resultado = a || b || c (true)
console.log(resultado) */

  // Exemplos (! NOT)

/* const primeiroValor = true
const resultado = !primeiroValor
console.log(resultado)*/


/*let nome = prompt("digite seu nome:");
console.log("nome:", nome);

let anoNascimento = prompt("digite seu ano de nascimento:")
let anoAtual = prompt("digite o ano atual")

let idade = anoAtual - anoNascimento;
console.log("idade",idade)

let maiorIdade = idade>= 18;
let idade2050 = 2050 - anoNascimento;


console.log("maior de idade" + maiorIdade);
console.log("idade em 2050"+   idade2050 + "anos")*/

/* const bool1 = true
const bool2 = false
const bool3 = !bool2 
 //o  operadores Logico ! antes da variavel bool2 foi usado para dar o valor contrario da bool2 para a bool12 que nao foi definida como true ou false.

let resultado = bool1 && bool2 
//&&  operadores Logico para retornar "true" apenas se todas forem verdadeiras, nesse caso no console isso daria false
console.log("a. ", resultado) //console.log em todos os exemplos abaixo para imprimir o codigo.

resultado = bool1 && bool2 && bool3 
// mesma coisa, porem com uma variavel a mais no exemplo
console.log("b. ", resultado)

resultado = !resultado && (bool1 || bool2) 
// ! novamente para contrariar transformando false em true, e entao resolvemos primeramente o que ha dentro dos parenteses, || sera false SÓ se todas forem false, o que nao é o caso, ficando como true
console.log("c. ", resultado)

console.log("d. ", typeof resultado) 
// typeof para revelar o tipo da variavel resultado, uma boolean por causa do false e true.
*/

// Exercicio 2  
/*let primeiroNumero = prompt("digite um numero!")
let segundoNumero = prompt("digite outro numero!")
const soma = primeiroNumero + segundoNumero
console.log(soma) 
 //sugestao:
 let primeiroNumero = Number(prompt("digite um numero!"))
let segundoNumero = Number(prompt("digite outro numero!"))
const soma = primeiroNumero + segundoNumero
console.log(soma) //number para converter */

// Exercicio 3

/*const idadeUsuario = Number(prompt("sua idade?"))
const idadeAmigo = Number(prompt("idade do melhor amigo?"))
let resultado = idadeUsuario > idadeAmigo
console.log("Sua idade é maior do que a do seu amigo?," resultado)
resultado = idadeUsuario - idadeAmigo
console.log(idadeUsuario - idadeAmigo) */

//Exercicio 4

/*const nPar = Number(prompt("Digite um numero par"))
console.log(nPar%2) 
// o numero 0 */

// exercicio 5

/* const idade = Number(prompt("sua idade?"))
const resultado = idade * 12
console.log("sua idade em meses é:",resultado)

let resultado1 = idade * 365
console.log("sua idade em dias é:",resultado1)
resultado1 *= 24
console.log("sua idade em horas é igual a:",resultado1) */

// exercicio 6

/*let numeros1 = Number(prompt("digite um numero"))
let numeros2 = Number(prompt("digite outro numero"))
let resultado = numeros1 > numeros2 
console.log(resultado) */







