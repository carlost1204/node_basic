const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charCodeAt(3));// valor na tabela unicode
console.log(escola.indexOf(3));

console.log(escola.substring(1));
console.log(escola.substring(0,3));

console.log('Escola '.concat(escola).concat("!")); 
console.log('Escola ' + escola + '!')

console.log(escola.replace(3,'e')); // letras por números
console.log('Ana,Maria,Pedro'.split(',')); // separa pela vírgula e transforma em array