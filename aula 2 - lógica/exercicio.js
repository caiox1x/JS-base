function maior(n1, n2) {
    if (n1 > n2) {
        return console.log(n1)
    } else if (n1 < n2) {
        return console.log(n2); 
    } else {
        console.log('Números Iguais');
    }
}
maior(544, 2)

// outras forma de fazer

function max(x, y) {    
    if (x > y) return x; return y;
};

console.log(max(10,10));

const max2 = (x, y) =>{
   return x > y ? x : y;
}

console.log(max2(10, 20));

const max3 = (x, y) => x > y ? x : y;

console.log(max3(30, 20));
