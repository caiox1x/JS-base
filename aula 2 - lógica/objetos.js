const pessoa = {
    nome: "caio",
    sobrenome: {
        sobrenome1: "do carmo",
        sobrenome2: "silva"
    },
    idade: 22,
    endereco: {
        rua: "travessa 28 de setembro",
        numero: 60
    }
};
const {nome, sobrenome, ...resto} = pessoa // utilizando '...' para objetos 
//const {endereco: {rua, numero}, nome, idade, sobrenome:{sobrenome1: teste , sobrenome2}} = pessoa // atribuição via desestruturação eu vou utilizar chaves dps do const
console.log(resto);

//quando uso os dois pontos estou atribuindo uma variavel para desestruturação 

