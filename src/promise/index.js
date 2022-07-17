// Estructura base de una promesa
const promise = new Promise(function (resolve, reject) { 
    resolve('hey! todo salio bien')
});


// Ejemplo de promesa
const cows = 15;

const countCows = new Promise(function (resolve, reject) { //Puedes omitir 'resolver' o 'reject' por cualquier palabra, pero no sería tan claro para otros desarrolladores
    //Si el num de vacas supera 10, se llama al resolve, de lo contrario se llama a reject
    if (cows > 10) {
        resolve(`We have ${ cows } cows on the farm`);
    } else {
        reject("There is no cows on the farm");
    }
});

// Ejecuta promesa
countCows.then((result) => { // La promesa se resolvio, entonces se ejecuta la función que pasamos a then
    console.log(result);
}).catch((error) => {  // La promesa fue rechazada entonces se ejecuta la funcion que pasamos a .catch
    console.log(error);
}).finally(() => console.log('Finally')); // La promesa ya finalizó, ejecuta funcionalidad haya obtenido un resolve  o reject