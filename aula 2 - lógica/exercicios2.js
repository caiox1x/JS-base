function ePaisagem(largura, altura) {
    return largura >= altura ? true : false
}

console.log(ePaisagem(10,20)); 

// arrow function 

const ePaisagem2 = (largura, altura) => largura >= altura  //na arrow function nn preciso de return 


console.log(ePaisagem2(100,200)); 