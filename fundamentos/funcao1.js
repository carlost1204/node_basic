// Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // pega o primeiro e o segundo é undefinided
imprimirSoma(2, 3, 4, 5, 6) // pega os dois e ignora o resto
imprimirSoma() // os dois undefined

// Funcao com retorno
function soma(a, b = 1){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())
