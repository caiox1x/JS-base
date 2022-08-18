const nome = ['Caio do Carmo', 'zilda', 'thaina'];

for (let i = 0; i < nome.length; i++) {
        console.log(i, nome[i]);
    
}

console.log('-----------------------');

for (let i in nome){
    console.log(i, " - " , nome[i]);
}

console.log('-----------------------');
//for of, retorna o valor contido e não mais os números de indice

for (let valor of nome) {
    console.log(valor);
}

console.log('-----------------------');

//exemplo de for each

nome.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
})