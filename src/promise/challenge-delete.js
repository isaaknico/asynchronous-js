import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

// Eliminar producto
function deleteData(urlApi) { // No es necesario pasar la data
    const response = fetch(urlApi, {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        } //no es necesario especificar el body
    });
    return response;
}

const idProduct = 241; // Id del producto que se quiere eliminar

deleteData(`${ API }/products/${ idProduct }`) // No es necesario pasar la data
    .then(() => {
        console.log(`Producto eliminado: ${ idProduct }`); // Es opcional imprimir en consola
});

/** 
 * Output:
 * Producto eliminado: 241
 */
/**
 * "Ver" valor eliminado en API:
 * https://api.escuelajs.co/api/v1/products/241
 * {"statusCode":404,"message":"Product not found","error":"Not Found"}
 */