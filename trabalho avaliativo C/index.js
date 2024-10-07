<<<<<<< HEAD

const personagens = [
    {
        nome: "Link",
        vida:5,
        ataque: 15,
        defesa: 8,
    },
    {
        nome:"Zelda",
        vida:4,
        ataque:10,
        defesa:10
    },
    {
        nome:"Ganondorf",
        vida:6,
        ataque: 18,
        defesa:12
    } ,
    { //teste
        nome:"Armos",
        vida:10,
        ataque: 10,
        defesa: 5,
    },
    {
       nome: -3,
       vida: 12.4,
       ataque: "fraco",
       defesa:0
    }
]
console.log("Personagens:", personagens)

const armas = [
    {
        nome:"Master sword",
        tipo: "espada",
        dano:20,
        alcance:"curto"
    },
    {
        nome:"Arco do heroi",
        tipo:"arco",
        dano:12,
        alcance:"longo"
    },
    {
        nome:"bumerangue",
        tipo:"bumerangue",
        dano:8,
        alcance:"médio"
    },
]
console.log("Armas:", armas)

const itens = [
    {
        nome:"Bomba",
        efeito:"explosao",
        quantidade: 3
    },
    {
        nome:"poçao vermelha",
        efeito:"curar",
        quantidade: 2
    },
    {
        nome:"rupee verde",
        efeito:"moeda",
        quantidade:50
    }
]
console.log("itens:", itens)

function validarPersonagens(personagens) {
    const atributosEsperados = ["nome", "vida", "ataque", "defesa"];

    for (let i = 0; i < personagens.length; i++) {
        const personagem = personagens[i];

     if (typeof personagem !== 'object' || personagem === null) {
    console.log(`erro: O item na posição ${i} não é um objeto válido de personagem`);
            return false;
        }
        for (let j = 0; j < atributosEsperados.length; j++) {
            const atributo = atributosEsperados[j];
        if (typeof personagem[atributo] === 'undefined') {
                console.log(`erro: o personagem na posição ${i} está faltando o atributo "${atributo}"`);
                return false;
            }
        }

        if (typeof personagem.nome !== 'string' || personagem.nome.trim() === "") {
            console.log(`erro: O personagem na posição ${i} possui um nome inválido (${personagem.nome}). o nome deve ser formado por letras`);
            return false;
        }

        if (typeof personagem.vida !== 'number' || !Number.isInteger(personagem.vida) || personagem.vida < 1 || personagem.vida > 20) {
            console.log(`erro: O personagem "${personagem.nome}" possui um valor de vida inválido (${personagem.vida}). Deve ser um número inteiro entre 1 e 20`);
            return false;
        }

        if (typeof personagem.ataque !== 'number' || personagem.ataque <= 0) {
            console.log(`erro: O personagem "${personagem.nome}" possui um valor de ataque inválido (${personagem.ataque}). Deve ser um número maior que zero`);
            return false;
        }

        if (typeof personagem.defesa !== 'number' || personagem.defesa <= 0) {
            console.log(`erro: O personagem "${personagem.nome}" possui um valor de defesa inválido (${personagem.defesa}). Deve ser um número maior que zero`);
            return false;
        }
    }

    console.log("Todos os personagens estão válidos.");
    return true;
}

validarPersonagens(personagens);


         function validarArmas(armas){
            const atributosEsperados = ["nome", "tipo","dano", "alcance"] 
                for(let i = 0; i < armas.length; i++){
                    const arma = armas[i]

                    for(let j = 0; i <atributosEsperados.length; j++){
                        const atributo =atributosEsperados[j]
                        if(typeof arma[atributo] === 'undefined') {
                            console.log(`erro: a arma "${arma.nome}" esta faltando um atributo`)
                            return false
                        }
                    }

                    if(armas.dano <=0){
                        console.log(`erro: a arma "${arma.nome} possui um valor de dano invalido`)
                        return false
                    }
                }
console.log("todas as armas estao validas")
return true

         }

         validarArmas(armas)




         function validarItens(itens){
            const atributosEsperados3 = ["nome","efeito"]
            for(let i = 0; i < itens.length; i++){
                const item = itens[i]

            for(let i = 0; j <atributosEsperados3.length; i++){
                const atributo = atributosEsperados3[j]
                
            }
            }
         }

         function validarItens(itens) {
            const atributosEsperados = ["nome", "efeito"];
        
            for (let i = 0; i < itens.length; i++) {
                const item = itens[i];
        
                for (let j = 0; j < atributosEsperados.length; j++) {
                    const atributo = atributosEsperados[j];
        
                
                    if (typeof item[atributo] === 'undefined') {
                        console.log(`erro: O item esta faltando o atributo "${atributo}".`);
                        return false;
                    }
                }
                if (typeof item.nome !== 'string' || item.nome.trim() === "") {
                    console.log(`erro: O item possui um nome inválido ("${item.nome}"). O nome deve ser uma string não vazia.`);
                    return false;
                }
        
                if (typeof item.efeito !== 'string' && typeof item.efeito !== 'number') {
                    console.log(`erro: o item "${item.nome}" possui um efeito invalido ("${item.efeito}"). o efeito deve ser uma string ou número.`);
                    return false;
                }
            }
        
            console.log("todos os itens estão validos.")
            return true;
        }
        validarItens(itens)
=======

const personagens = [
    {
        nome: "Link",
        vida:5,
        ataque: 15,
        defesa: 8,
    },
    {
        nome:"Zelda",
        vida:4,
        ataque:10,
        defesa:10
    },
    {
        nome:"Ganondorf",
        vida:6,
        ataque: 18,
        defesa:12
    } ,
    { //teste
        nome:"Armos",
        vida:10,
        ataque: 10,
        defesa: 5,
    },
    {
       nome: -3,
       vida: 12.4,
       ataque: "fraco",
       defesa:0
    }
]
console.log("Personagens:", personagens)

const armas = [
    {
        nome:"Master sword",
        tipo: "espada",
        dano:20,
        alcance:"curto"
    },
    {
        nome:"Arco do heroi",
        tipo:"arco",
        dano:12,
        alcance:"longo"
    },
    {
        nome:"bumerangue",
        tipo:"bumerangue",
        dano:8,
        alcance:"médio"
    },
]
console.log("Armas:", armas)
//array itens
const itens = [
    {
        nome:"Bomba",
        efeito:"explosao",
        quantidade: 3
    },
    {
        nome:"poçao vermelha",
        efeito:"curar",
        quantidade: 2
    },
    {
        nome:"rupee verde",
        efeito:"moeda",
        quantidade:50
    }
]
console.log("itens:", itens)



function validarPersonagens(personagens) {
    const atributosEsperados = ["nome", "vida", "ataque", "defesa"];

    for (let i = 0; i < personagens.length; i++) {
        const personagem = personagens[i];

  
        if (typeof personagem !== 'object' || personagem === null) {
            console.log(`erro: O item na posição ${i} não é um objeto válido de personagem.`);
            return false;
        }
        for (let j = 0; j < atributosEsperados.length; j++) {
            const atributo = atributosEsperados[j];
            
        
            if (typeof personagem[atributo] === 'undefined') {
                console.log(`erro: o personagem na posição ${i} está faltando o atributo "${atributo}"`);
                return false;
            }
        }

        if (typeof personagem.vida !== 'number' || personagem.vida < 1 || personagem.vida > 20) {
            console.log(`Erro: O personagem "${personagem.nome || "Desconhecido"}" possui uma quantidade de vida inválida (${personagem.vida}). Deve estar entre 1 e 20 corações.`);
            return false;
        }

  
        if (typeof personagem.ataque !== 'number' || personagem.ataque <= 0) {
            console.log(`Erro: O personagem "${personagem.nome}" possui um valor de ataque inválido (${personagem.ataque}). Deve ser um número maior que zero.`);
            return false;
        }

        if (typeof personagem.defesa !== 'number' || personagem.defesa <= 0) {
            console.log(`Erro: O personagem "${personagem.nome}" possui um valor de defesa inválido (${personagem.defesa}). Deve ser um número maior que zero.`);
            return false;
        }
    }

    console.log("Todos os personagens estão válidos.");
    return true;
}

validarPersonagens(personagens);
         function validarArmas(armas){
            const atributosEsperados = ["nome", "tipo","dano", "alcance"] 
                for(let i = 0; i < armas.length; i++){
                    const arma = armas[i]

                    for(let j = 0; i <atributosEsperados.length; j++){
                        const atributo =atributosEsperados[j]
                        if(typeof arma[atributo] === 'undefined') {
                            console.log(`erro: a arma "${arma.nome}" esta faltando um atributo`)
                            return false
                        }
                    }

                    if(armas.dano <=0){
                        console.log(`erro: a arma "${arma.nome} possui um valor de dano invalido`)
                        return false
                    }
                }
console.log("todas as armas estao validas")
return true

         }

         validarArmas(armas)




         function validarItens(itens){
            const atributosEsperados3 = ["nome","efeito"]
            for(let i = 0; i < itens.length; i++){
                const item = itens[i]

            for(let i = 0; j <atributosEsperados3.length; i++){
                const atributo = atributosEsperados3[j]
                
            }
            }
         }

         function validarItens(itens) {
            const atributosEsperados = ["nome", "efeito"];
        
            for (let i = 0; i < itens.length; i++) {
                const item = itens[i];
        
                for (let j = 0; j < atributosEsperados.length; j++) {
                    const atributo = atributosEsperados[j];
        
                
                    if (typeof item[atributo] === 'undefined') {
                        console.log(`erro: O item esta faltando o atributo "${atributo}".`);
                        return false;
                    }
                }
                if (typeof item.nome !== 'string' || item.nome.trim() === "") {
                    console.log(`Erro: O item possui um nome inválido ("${item.nome}"). O nome deve ser uma string não vazia.`);
                    return false;
                }
        
                if (typeof item.efeito !== 'string' && typeof item.efeito !== 'number') {
                    console.log(`Erro: O item "${item.nome}" possui um efeito inválido ("${item.efeito}"). O efeito deve ser uma string ou número.`);
                    return false;
                }
            }
        
            console.log("Todos os itens estão válidos.");
            return true;
        }
        validarItens(itens);
>>>>>>> 3b3e8fdd6f63b5ddac49c2231d9d03ff404f5ea9
       