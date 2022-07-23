// Función que retorna promesa
const fnAsync = () => { 
    return new Promise((resolve, reject) => {
        (true) // Con true se fuerza a que se cumpla la condición, 
        ? setTimeout(() => resolve('Async resolved!'), 2000)
        : reject(new Error('Error!'));
    });
}

// Funcion async (utiliza concepto de async/await)
const anotherFn = async () => { // Uso de palabra reservada async para el cuerpo de la función, antes de declarar función anonima.
    // Uso de palabra reservada await dentro de la lógica a implementar, antes de llamado a función que devuelve promesa
    const something = await fnAsync(); // await espera hasta que la promesa de fnAsync() se resuelva para continuar.
    console.log(something);
    console.log('Hello!'); // Se imprime hasta que await se complete.
}

console.log('Before');
anotherFn(); // Llamado a función async. No bloquéa el flujo por lo que continua con la sig. linea en lo que se resuelve la promesa.
console.log('After'); // Aparece justo después de 'Before' porque anotherFn() está esperando una promesa y aún así el programa no se detiene, sino que sigue.

/**
 * Output:
 * Before
 * After
 * Async!!
 * Hello!
 */