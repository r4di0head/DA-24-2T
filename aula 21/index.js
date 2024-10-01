//interpretaçao de codigo
//1 o valor impresso sera 16, linha 2 começara em 0 ea teirceira coluna 1 como começa em 0 a segunda
/* let matriz = [
    [2,4,6],
    [8,10,12],
    [14,16,18]
]
console.log(matriz[2][1]);*/


//2  os numeros 2,4 e 6 pois aplicado um mod

/* let matriz = [
    [1,2],
    [3,4],
    [5,6,7]
]

for (let i = 0; i < matriz.length; i++){
    for(let j = 0; j <matriz[i].length; j++){
if(matriz[i][j] % 2 === 0){
    console.log(matriz[i][j])
}
    }
} */ 

//3 225, a cada iteraçao é somado o vlaor da posiçao a soma

/*let matriz = [
    [5,10,15],
    [20,25,30],
    [35,40,45]
];
let soma = 0
for(let i = 0; i <matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++){
        soma += matriz[i][j];
    }
}
console.log(soma)
*/

//4
/* let mapa = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
for(let i = 0; i <mapa.length; i++){
    for(let j = 0; j <mapa[i].length;j++){
        mapa[i][j]= Math.floor(Match.random() * 3); //o numero aleatorio entre 0 e 2
    }
}
console.log(mapa) */

//5

/* let pontuacoes = [[10,20,15,30],[5,25,10,20],[15,10,20,25]];
function calcularPontuacoesTotais(pontuacoes){
    for(let i=0; i < pontuacoes.length;i++){
      let pontuacaoTotal = 0;
      for(let j = 0;j<pontuacoes[i].length;j++){
        pontuacaoTotal += pontuacoes[i][j]
        console.log(`pontuaçao total do jogador ${i+1}`)
        `${pontuacaoTotal}`; }} calcularPontuacoesTotais(pontuacoes)
     }
      */
//6

let matriz = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
function inverterLinhas(matriz){
for(let i = 0; i < matriz.length;i++){
    matriz[i].reverse(); //inverte a linha
}
}
console.log("matriz original:", matriz);
inverterLinhas(matriz) 
console.log("matriz invertida:",matriz)

//7 - desafio

