 // aula 20, Matriz.

 //exemplo 1
 /* let matriz = [
[1,2,3] ,
[4,5,6]
]
console.log(matriz[0][1])
console.log(matriz[1][2])
console.log(matriz[1][0]) 


//exemplo 2
let matriz2 = [
    [10,20,30],
    [40,50,60],
    [70,80,90]

]


//exemplo 3
let matriz3 = [];
matriz3[0]  = [1,2,3]
matriz3[1]  = [4,5,6]
matriz3[2]  = [7,8,9]

console.log(matriz2[0][1]); //valor 20
console.log(matriz2[2][1]); //valor 80
console.log(matriz[1][0]); //valor 40 */

/* let matrizJV = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

matrizJV[1][3] = 1                                                                                                         
console.log(matrizJV[0][0], matrizJV[0],[1], matrizJV[0],[2])
console.log(matrizJV[1][0], matrizJV[1],[1], matrizJV[1],[2])
console.log(matrizJV[2][0], matrizJV[2],[1], matrizJV[2],[2])

let matriz4 = [
[1,2,3],
[4,5,6],
[7,8,9]
]
let soma = 0
for(let i=0; i<matriz4.length;i++){
    for(let j=0; j<matriz4[i].length;j++)
        for(let j=0; j<matriz4[i].length;j++){
    matriz4[i][j] *=2
        console.log(matriz4[i][j])


        soma += matriz4[i][j]
    }
}
console.log(soma) */

/* let matriz4 = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
    ]

    function soma(){
        for(let i=0; i<matriz4.length;i++){
        for(let j=0; j<matriz4[i].length;j++)
            for(let j=0; j<matriz4[i].length;j++){   
             let resultado = matriz4[i][j] 
               
        }
    }
}

console.log(resultado) */

let tabuleiro = [
 //  0 1 2 3 4 5 6 7 8 9
    [0,0,0,0,0,0,0,0,0,0],//0
    [0,0,0,0,0,0,0,0,0,0],//1
    [0,0,0,0,0,0,0,0,0,0],//2
    [0,0,0,0,0,0,0,0,0,0],//3
    [0,0,0,0,0,0,0,0,0,0],//4
    [0,0,0,0,0,0,0,0,0,0],//5
    [0,0,0,0,0,0,0,0,0,0],//6
    [0,0,0,0,0,0,0,0,0,0],//7
    [0,0,0,0,0,0,0,0,0,0],//8
    [0,0,0,0,0,0,0,0,0,0]//9
]

function porNavios(){
   tabuleiro[1][3] = 1
    tabuleiro[1][4] = 1
   tabuleiro[1][5] = 1
}
let quantidadeN=0
for(let i=0; i<tabuleiro.length; i++){
for(let j=0; j<tabuleiro[i].length;j++)
    quantidadeN+=tabuleiro[i][j]
}

let escolhaL = Number(prompt("escolha a linha para atacar (0-9)"))
let escolhaC = Number(prompt("escolha a coluna para atacar(0-9)"))

function verificaPos(linha, coluna){
        if(tabuleiro[linha][coluna] === 1 )
console.log(acertou)
} 
else if()