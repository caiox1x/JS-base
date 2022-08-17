// atribuição via desestruturação com

const numeros = [1414516, 2165165, 3, 4, 5, 6, 7, 8, 9];

const [numeroUm, numeroDois, ...resto ] = numeros;

resto.splice(1, 0, 2255)

console.log(numeroUm, numeroDois, resto);
console.log(numeros[1]);

const arrayDeArrays = [[1, 2 ,3], [4, 5 ,6], [7, 8 ,9]]

const [,[,,seis]] =  arrayDeArrays;

console.log(seis);