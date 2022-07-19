import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

// Actualizar producto
function putData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response
}

const data = {
    "title": "New Product Coourse - Change title",
    "price": 1200
}

const idProduct = 238;

putData(`${ API }/products/${ idProduct }`, data)
    .then(response => response.json())
    .then(data => console.log(data));

