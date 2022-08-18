//for in vai ler só on indices, por isso o padrão de usar i

const frutas = ['Pera', 'Maçã', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

for (let i in frutas){
    console.log(i, frutas[i]);
}

const pessoa = [ 'Caio', 'Zilda', 'Thainá', 'Vitor']

for(let i in pessoa){
    console.log(i, pessoa[i]);
}

//agora com objetos 
const pessoas = {
    nome: "Caio",
    sobrenome: "Silva",
    idade: 22
};

for(let i in pessoas){
    console.log(i, pessoas[i]);
}

//formas de pegar um valor do objeto
 const key = 'nome';

 console.log(pessoas[key]);
