// Declara función del Generador
function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

// Guarda en const función Generadora
const g = gen(); // Object [Generator] {}

// Llama al método next en el objeto del Generador
console.log(g.next().value); // 1
console.log(g.next().value); // 2
console.log(g.next().value); // 3


// Iterando con array y for of
// Declara función del Generador, recibe array como arg
function* iterate(array) {
    for (let value of array) {
        yield value
    }
}

// Guarda en const función Generadora como param un array 
const it = iterate(['isaak', 'omar', 'ana', 'lucia', 'juan']);

// Llama al método next en el objeto del Generador
console.log(it.next().value) // isaak
console.log(it.next().value) // omar
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value) // undefined