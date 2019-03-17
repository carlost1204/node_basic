/*
    v e v -> v
    v e f -> f
    f e ? -> f

    v ou ? -> v
    f ou v -> v
    f ou f -> f

    v xor v -> f
    v xor f -> v
    f xor v -> v
    f xor f -> f

    !v -> f
    !f -> v
*/

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2  // se um dos dois for true já atribui a comprar sorvete
    const comprarTv50 = trabalho1 && trabalho2 //se os dois forem verdadeiros já atribui a comprar Tv50
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))