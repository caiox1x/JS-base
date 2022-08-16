const pessoa1 = {
    nome: 'Caio',
    sobrenome: 'Silva',
    idade: 17,

    fala() {
        console.log(`Olá meu nome é ${this.nome}, tenho ${this.idade}`);
    },

    deMaior() {
         if (this.idade <= 18) {
            return console.log(`${this.nome} tem ${this.idade} e é de menor`);
        } else {
            return console.log(`${this.nome} tem ${this.idade} e é de maior`)
        };
    }
};

pessoa1.fala()
pessoa1.deMaior()

console.log(pessoa1.nome);

const criaPessoa = (nome, sobrenome, idade) =>{
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoa = criaPessoa('Caio', ' Do Carmo', 22)
const pessoa2 = criaPessoa('Zilda', ' Soares', 53)
const pessoa3 = criaPessoa('Thainá', ' Do Carmo', 23)
const pessoa4 = criaPessoa('Lays', ' Silva', 82)

console.log(pessoa.nome, pessoa2.sobrenome, pessoa3.idade);

const a = [1, 2, 3]
const b = a
const c = a 

c.push("teste")
c.splice(1,1, "Caio") //remove o valor especificado a partir de um indice q é o 
// primeiro número, por ultimo se eu quiser posso adicionar um novo valor naquele lugar removido

console.log(a, b ,c);