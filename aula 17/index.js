                    // OBJETOS - exemplo 1

 /* const professor = {
    nome: "Maria" ,
    idade: 28 ,
    altura: 1.75,
    email: 'maria@gmail.com',
    tarefas:['dar aula','responder duvidas','ler texto'] ,
    contarPiadas:function(){
        console.log("é pa vê ou pa comê")
    }
} 

console.log(professor.nome)
console.log(professor.idade)
console.log(professor.altura)
console.log(professor["email"])
console.log("A tarefa do prof é:" , professor.tarefas[0])

professor.nome = 'Leo'
professor["email"] = 'led@gmail.com'
console.log(professor.nome)
console.log(professor.altura)
console.log(professor["email"]) */

/* const filme = {
    direçao: "tim burton" ,
    nome: "vou cometer um crime" , 
    ano: "1994" ,
    elenco:['gabriel','anna',] ,
              }
console.log(filme.nome)
console.log(filme.ano)
console.log(filme.direçao)
console.log(filme.elenco)
console.log("O filme ja foi assistido") */

/*const meuAmor = {
    nome: "gabriel" ,
    idade: 15 ,
    generoMusical: "trap" ,
}

console.log("O nome dele é" , meuAmor.nome ,",tem", meuAmor.idade,"anos e gosta muito de", meuAmor.generoMusical) */


                                 // objetos dentro de objetos


/* const donoDoPet = {
    nome:"Anna" ,
    idade: 17,
    pet: {
        nome:"Mia",
        raça:"laranja",
        idade:3
    }
}  
 console.log(donoDoPet.pet.nome) */

 // arrays dentro de objetos

 /* const curso = {
    nome:"Noturno Frontend",
    linguagens:["JS","CSS","HTML"]
 }
 console.log(curso.linguagens[0]) 
 curso.numeroEstudantes = 50
 curso['numeroProfessor'] = 10
 console.log(curso.numeroEstudantes)
 console.log(curso.numeroProfessor) */

 /* const professores =  [
{nome: "Lucas", idade: 32, modulo:1},
{nome: "Leo", idade: 29, modulo:2},
{nome: "Mika", idade:29, modulo:3},
 ]
 console.log(professores[0].nome) */


 /* const filme = {
    direçao: "tim burton" ,
    nome: "vou cometer um crime" , 
    ano: "1994" ,
    elenco:['eliza' , 'gabriel','anna',] ,
    personagens:['mae', 'nicolas', 'daira']
              }
console.log( filme.elenco) */

/* const usuario = {
    nome:'prof',
    idade: 27,
    email: 'prof@senac.com.br',
    cidade: 'sao leopoldo'
}

const NovoUsuario = {
...usuario,
nome:'lucas',
idade:'32',
cidade: 'canoas'

}

console.log(NovoUsuario)

const nomeProfs = ['lucas','leo','mika']
let novaListaProfs = [...nomeProfs,]
console.log(novaListaProfs)

nomeProfs.push('Joao')
console.log("o nome do prof é: " , novaListaProfs[0]) */


 /*const meuAmor = {
    nome: "gabriel" ,
    idade: 15 ,
    generoMusical: "trap" ,
}

const meuAmorAinda = {
    ...meuAmor,
    comidas: ['sorvete', 'pipoca' , 'bolo'] ,
    melhorAmiga: {
        nome:"anna",
     idade:16
    }
}
function imprimir(nome){
    console.log("o nome dele é", nome)
}

imprimir("Gabriel")

function imprimeComes(comidas){
    console.log("suas comidas favotiras sao:" , comidas)
}
imprimeComes('sorvete', 'pipoca', 'bolo')

function imprimeEu(nome2){
    console.log("e sua melhor amiga (namorada) se chama:" , nome2)
}
imprimeEu("anna") */


 