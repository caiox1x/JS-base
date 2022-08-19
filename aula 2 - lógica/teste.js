let matriz = [[5, -3], [1, -3], [3, 10]]
let sln = [0 ,0 ,0]
let x, i ,j 
x = 0

for (i = 0; i <2; i++) {
    for (j = 0; j <2; j++) {
        sln[i] += matriz[i][j];
    };
    x += sln[i];
}

console.log(x);

let pilha = [];

let fila = [];

fila.push('A')
pilha.push('B')
fila.push('C')
fila.shift('')
pilha.push('D')
fila.push('E')
pilha.pop()

console.log(pilha);
console.log(fila);

function permutacao(n) {
    if (n > 1) {
        return (n-1) * n
    } else {
        return 1
    }
}


let resultado 

resultado = permutacao(9)

console.log(`Numero de permutações para plavara é: ${resultado}`);


const a1 = ['João', 'Gabriel', 'Stephanie', 'Daniel', 'Arthur', 'Guilherme', 'Matheus', 'Renan', 'Carolina'];
const a2 = ['Bruno', 'Guilherme', 'Carolina', 'Daniel', 'Arthur', 'Marcus', 'Severino', 'Oman', 'Stephanie'];
const intersection = a1.filter(i => a2.includes(i));

console.log(intersection);
