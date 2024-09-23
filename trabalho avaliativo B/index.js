// trabalho avaliativo B
let personagens = [];
// array vazia para os personagens serem adicionados comforme a function abaixo

function adicionarPersonagem(nome, classe, nivel, hp, habilidades) {
  //fara os personagens adicionados virem com essas categorias
  let personagem = {
    //criando um objeto que ira servir para todos os personagens
    nomeP: nome,
    classeP: classe,
    nivelP: nivel,
    hpP: hp,
    habilidadesP: habilidades,
    historicoAcoes: [],

    atacar: function (alvo) {
      const acao = `${nome} atacou ${alvo.nome}!`;
      historicoAcoes.push(acao);
      console.log(acao);
    },
    defender: function (escudo) {
      const acao2 = `${nome} esta se defendendo!`;
      //a funçao para cada açao especifica
      this.historicoAcoes.push(acao2);
      console.log(acao2);
    },
    especial: function (hab, alvo) {
      const açao3 = `${nome} usou a habilidade especial "${habilidades}" em ${alvo.nome}!`;
    },
  };
  personagens.push(personagem); //adicionando os personagens
}
function buscarPersonagem(nome) { //a funçao que ajudara no historico e para procurar um personagem especifico
  for (let i = 0; i < personagens.length; i++) {
    if (personagens[i].nome === nome) {
      return personagens[i];
    }
  }
}
adicionarPersonagem("Chris", "vampiro", 12, 150, [
  "metamorfose",
  "regeneraçao",
]);  //adicionando os personagens

adicionarPersonagem("Evan", "zumbi", 7, 100, ["infeccao", "mordida"]);

adicionarPersonagem("Nina", "fantasma", 10, 80, [
  "invisibilidade",
  "atravessar paredes",
]);

function ListarPersonagens() { //a funçao para listar um por um no console
  if (personagens.length === 0) {
    console.log("nenhum personagem cadastrado");
  } else {
    console.log("lista de personagens:");
    for (let i = 0; i < personagens.length; i++) {
      let personagem = personagens[i];
      console.log(`nome: ${personagem.nomeP},
         classe: ${personagem.classeP
         },
         nivel: ${personagem.nivelP},
         hp:${personagem.hpP} `);
    }
  }
}
console.log(`${personagens[0].nomeP} foi adicionado(a) com sucesso!`);
console.log(`${personagens[1].nomeP} foi adicionado(a) com sucesso!`);
console.log(`${personagens[2].nomeP} foi adicionado(a) com sucesso!`);

ListarPersonagens(); // chamando a funçao

function exibirHistorico(nome) { //e a funçao para o historico das açoes dos personagens
  const personagem = buscarPersonagem(nome); 
  if (personagem) {
    console.log(`historico de açoes de ${personagem.nome}:`);
    for (let i = 0; i < personagem.historicoAcoes.length; i++) {
      console.log(personagem.historicoAcoes[i]);
    }
  }
}

let Chris = buscarPersonagem("Chris");
let Evan = buscarPersonagem("Evan");
let Nina = buscarPersonagem("Nina");

console.log("Histórico de ações de Chris:");
exibirHistorico("Chris");
console.log("Histórico de ações de Evan:");
exibirHistorico("Evan");
console.log("Histórico de ações de Nina:");
exibirHistorico("Chris"); // para mostrar as açoes de cada um


