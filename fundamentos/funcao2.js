// Armazenando uma funcao em uma variavel
const imprimirSoma = function(a, b){
    console.log( a + b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a,b) => {
    return a + b
}

console.log(soma(3,2))


// ARROW FUNCTION - retorno implicito, usar apenas quando tiver uma linha 
const subtracao = (a,b) =>  a - b

console.log(subtracao(10,5))

const imprimir2 = a =>  console.log(a)
imprimir2('LEGAL !!!')
