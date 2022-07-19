import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

// Agregar producto
// Usa fetch transformado a metodo POST
// Recibe la url de la api a la que queremos llamar y la data que vamos a enviar, retorna el llamado de fetch: una promesa
function postData(urlApi, data) {
    const response = fetch(urlApi, { // Agrega estructura de datos a fetch, para que entienda que ya no es una solicitud get(obtener), sino post(guardar)
        method: 'POST', // Metodo a implementar
        mode: 'cors', // Permisos que va a tener
        // A partir de aquí las sigs props ya tienen valor por defecto por lo que podemos pasarlas o no.
        credentials: 'same-origin', // Credenciales si es necesario un tipo de autenticacion(ej. un usuario y contraseña). Valor por defecto: 'same-origin'
        headers: { // Cabeceras que se envian en la solicitud para que reconozca que tipo de valor estamos enviando.
            'Content-Type': 'application/json' // El valor que envia es de application/json
        },
        body: JSON.stringify(data) // Informacion que queremos transmitir a la API. Transforma la información(obj) recibida por param y la transforma a json.
    });
    return response;
}

// Información a enviar(de acuerdo a doc de Api)
const data = {
    "title": "New Product Coourse",
    "price": 10999,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
};

// Llamado a fetch: promesa
postData(`${ API }/products`, data)
    .then(response => response.json()) // Retorna el response transformado a json
    .then(data => console.log(data)); // Imprime en consola la respuesta transformada en obj json

/**
 * Output:
 * {
        title: 'New Product Coourse',
        price: 10999,
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
 * Ver Valor creado en API:
 * https://api.escuelajs.co/api/v1/products/238
 */