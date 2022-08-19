// modulo para estudo avançado sobre funções

//function express é o mesmo que atribuir uma função á uma variavel
//é muito util para passar uma função como parametro de outra função por exemplo 

const souUmDado = function () {
    console.log("sou um dado");
};

function receboUmDado(funcao) {
    console.log("Vou executar a funcao");
    funcao();
    
};

 receboUmDado(souUmDado);

 // dentro de um objeto 

 const obj = {
    falar() {
        console.log("Olá meu nome é caio");
    }
 };

 obj.falar()