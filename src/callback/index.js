/**
 * Callback
 */

// Ej. 1:
// Funcion callback
function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) { // No es obligatorio nombrarlo como callback
    return callback(num1, num2);
}

console.log(calc(2, 2, sum)); // 4
// No es necesario agregar '()' a funcion, si se agregan estaria invocando a la funcion inmediatamente.
// Tampoco es necesario pasarle argumentos, estos se los pasa la funcion calc en el return


// Ej. 2:
// setTimeout: Permite ejecutar codigo en un tiempo determinado que yo defina.
/** Recibe como argums: 
 * - Funcion
 * - El tiempo (en ms)
 * - Argums que vayamos a usar (opcional)*/ 
setTimeout(function () {
    console.log('Hola javascript')
}, 5000)


// Ej. 3:
function gretting(name) {
    console.log(`Hola ${ name }`);
}

setTimeout(gretting, 2000, 'Isaak'); // Hola Isaak

// setTimeout(gretting('Angelo'), 3000); // ERR_INVALID_CALLBACK(callback)