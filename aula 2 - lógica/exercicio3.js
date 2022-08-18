function fizzBuzz(numero) {
    if (typeof numero !== "number") return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz'; //essa condição deve vim primeiro, caso as outras venham primeiro, elas vão marcar a lista primeiro
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    
    return numero;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));;
}

// usei o for para especificar quantas veezes eu gostaria de usar a função
//nesse caso o proprio i do for, pode ser passado como parametro para a função, 
// pois a função está sendo chamada dentro do escopo do for 