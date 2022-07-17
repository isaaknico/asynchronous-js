// Estructura base de una promesa
const promise = new Promise(function (resolve, reject) { 
    resolve('hey! todo salio bien')
});


// Ejemplo de promesa
const cows = 15;

const countCows = new Promise(function (resolve, reject) { // Puedes omitir 'resolver' o 'reject' por cualquier palabra, pero no sería tan claro para otros desarrolladores
    if (cows > 10) {
        resolve(`We have ${ cows } cows on the farm`); // Llama a resolve, retorna un resultado y entonces se ejecuta la función que pasamos al método .then.
    } else {
        reject("There is no cows on the farm"); // Lama a reject, retorna un error, ejecuta la función que pasamos a .catch.
    }
});

// Ejecuta promesa
countCows.then((result) => { // La promesa se resolvió, pasa una función que recibe como param el resultado de resolve y ejecuta dicha función.
    console.log(result);
}).catch((error) => {  // La promesa fue rechazada, pasa una función que recibe como param el error(reject) y ejecuta dicha función.
    console.log(error);
}).finally(() => console.log('Finally')); // La promesa ya finalizó, pasa una función que ejecuta una funcionalidad, haya obtenido un resolve o un reject.

/**
 * Visto de otra forma sin y con arrow functions:
 * countCows.then(function(result) {
 *     return console.log(result);
 * }).catch( error => console.log(error)).finally(function() {
 *     return console.log('Finalizado');
 * });
 */