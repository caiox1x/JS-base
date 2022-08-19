// funções definidas com a palavra fucntion, por padrão do javascript vem com arguments, 
// que sustenta todos os argumentos enviados na chamada da função, então consigo mandar a função 
// sem parametros, coloco parametros so na execução, e na construção da função trabalho com arguments 
// não funciona em arrow function

function funcao() {
    let total = 0;
    for (let argumento of arguments) {  
        total += argumento; 
    }

    console.log(total);
}

funcao(1, 2, 3, 4, 5, 6, 7, 8, 9)

//----------------------------------------------------------

// posso definir parametros da funcao com valores fixos, 
//caso eles nn sejam passados pelo usuario, irão assumir o valor que eu especifiquei 

function soma(x , y = 0, z = 0 ) { 
    console.log(x + y + z);
}

soma(10, 5) 

// atribuição via desestruturação com funcoes

function function2({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
let obj = {
    nome: 'caio', 
    sobrenome: 'silva', 
    idade: 22
}

function2(obj)

//criando uma minicalculadora usando funcao

function calculadora(operador, acumulador, ...numeros) { //utilizar rest operator que são os ..., para quando for muitos parametros, funciona para arrow functions tbm
    for (let numero of numeros) {
        if (operador === "+") { acumulador += numero };
        if (operador === "-") { acumulador -= numero };
        if (operador === "*") { acumulador *= numero };
        if (operador === "/") { acumulador /= numero };
    }
    console.log(acumulador.toFixed(2))
}

calculadora("*", 1, 30 ,20, 20)

