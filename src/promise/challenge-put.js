import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

// Actualizar producto
function putData(urlApi, dataUpdate) {
    const response = fetch(urlApi, {
        method: 'PUT',
        mode: 'cors',
		credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataUpdate)
    });
    return response
}

// Información a actualizar(de acuerdo a doc de Api)
const dataUpdate = {
    "title": "New Product Coourse - Change title Update",
    "price": 1200 // No es necesario colocar todas las características del objeto, solo las que se cambiarán
}

const idProduct = 238;

// Llamado a fetch: promesa
putData(`${ API }/products/${ idProduct }`, dataUpdate) // Se debe colocar el id del objeto que se quiere modificar
    .then(response => response.json())
    .then(data => console.log(data));

/**
 * Output:
 * {
        title: 'New Product Coourse - Change title Update',
        price: 1200,
        description: 'A description',
        images: [ 'https://placeimg.com/640/480/any' ],
        category: {
            id: 1,
            name: 'Clothes',
            keyLoremSpace: 'fashion',
            image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=6862'
        },
        id: 238
        }
 */
/**
 * Ver Valor modificado en API:
 * https://api.escuelajs.co/api/v1/products/238
 */