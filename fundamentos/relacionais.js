
// == (igual) valor
// === (estritamente igual) tipo


console.log('01)', '1' == 1)
console.log('02)', '1' === 1)
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

// compara enderço de memória já que são instancias
const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 == d2)
console.log('10)', d1 === d2)

// comparando o valor
console.log('11)', d1.getTime() == d2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)