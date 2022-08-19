// aula pra entender mais sobre return


//posso usar return para declarar literalmente como vai ser o retorno da função. nesse caso parecido com herança,
// declarei um objeto no retorno da função e depois o passei como argumento da função
function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome};
}

const pessoa1 = criaPessoa("Caio", "Silva")

console.log(pessoa1);


function falaFrase(comeco) {
    function falaResto(resto) { 
        return comeco + ' ' + resto;
    }
    return falaResto; //posso chamar a função que está dentro de outra aqui mesmo, pois já é 
                      //outro escopo, ou seja um local diferente de onde a função foi criada
}

const olaMundo = falaFrase("Olá");

console.log(olaMundo("Mundo!"));

// outro exemplo de retorno de funcao dentro de funcao

function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador
    };
};

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)
const quintuplica = criaMultiplicador(5)

console.log(duplica(3)); 
console.log(triplica(3)); 
console.log(quadriplica(3)); 
console.log(quintuplica(2)); 