//introduçao a validaçao e testes

/* let numeros = [1,2,3,4,5];
let soma = 0 //erro: nao inicializou a variavel "soma"

for(let i = 0; i < numeros.length; i++){
    soma += numeros[i];
} 
console.log(soma); //o que esta acontecendo aqui? */


//        2
/* function fatorial(n){
    let resultado = 1;
    for(let i = n; i > 0; i--){
        resultado *= i;
    }
    return resultado;
}

console.log(fatorial(5)); //esperado 120 */

/*
it  |  i  | res.
1   |  5 |    5
2   |  4 |   20
3   |  3 |   60
4   |  2 |  120
5   |  1 |  120
*/

//       3
/* let numeros = [1,2,3,4,5];
 let soma = 0;
  for(let i = 0; i < numeros.length; i++) {
    console.log(`i: ${i}, numeros[i]: ${numeros[i]}, soma antes: ${soma}`)
    soma += numeros[i];
    console.log(`soma depois: ${soma}`);
  }

  console.log(`resultado final: ${soma}`); */

//        4
/* let numeros = [1,2,3,4,5];
let somaPares = 0;
for (let i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 === 0){
        somaPares += numeros[i];
    }
}

console.log(somaPares); // esperando 6(2+4) */

//       5
function jogoPontuacao(jogadas){
    let pontuacao = 0;

    for (let i = 0; i <= jogadas.length; i++){
        if (jogadas[i] === "ganhou"){
            pontuacao += 3;
        } else if(jogadas[i] === "empatou") {
            pontuacao += 1;
        } else if (jogadas[i] === "perdeu"){
            pontuacao -= 1;
        }
    }
    return pontuacao;
}

let resultadoFinal = jogoPontuacao(["ganhou","empatou","perdeu","ganhou"])
console.log(`pontuacao final: ${resultadoFinal}`) // corrija os erros e veja o resultado