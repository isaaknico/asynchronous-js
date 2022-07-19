import fetch from 'node-fetch'; // Permite trabajar con fetch en Node
const API = 'https://api.escuelajs.co/api/v1';

// Recibe la url de la api a la que queremos llamar y retorna el llamado de fetch: una promesa
function fetchData(urlApi) {
    return fetch(urlApi); // fetch es una Promesa por defecto.
};

// Llamados a fetch(promesas):
// Obtiene todos los productos.
/* fetchData(`${ API }/products`) 
    .then(response => response.json()) // Recibe respuesta del llamado de fetchData y la transforma a un obj json.
    .then(products => { // Se pueden encadenar múltiples .then
        console.log(products); // Imprime la respuesta del 1er llamado
    })
    .then(() => { // Encadena otro .then
        console.log('hola'); 
    })
    .catch(error => console.log(error)); // Recibe error en caso de existir y lo imprime

/**
 * Output:
 *  [
        {
            id: 1,
            title: 'Unbranded Wooden Chair',
            price: 513,
            description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
            category: {
            id: 4,
            name: 'Shoes',
            image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=5587'
            },
            images: [
            'https://api.lorem.space/image/shoes?w=640&h=480&r=4050',
            'https://api.lorem.space/image/shoes?w=640&h=480&r=1957',
            'https://api.lorem.space/image/shoes?w=640&h=480&r=4992'
            ]
        },
        ... 107 more items
    ]
 *  hola
 */

// Obtiene un obj de producto, un titulo de producto y el nombre de una categoria.
fetchData(`${ API }/products`)
    .then(response => response.json()) // Se hace la conversión a un objeto json
    .then(products => {
        console.log(products)
        return fetchData(`${ API }/products/${ products[0].id }`)
    })
    .then(response => response.json()) // Se vuelve traer la respuesta
    .then(product => {
        console.log(product.title)
        return fetchData(`${ API }/categories/${ product.category.id }`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name)
    })
    .catch(error => console.log(error))
    .finally(() => console.log('Finally'));
    
/**
 * Output:
 *  [
        {
            id: 1,
            title: 'Unbranded Wooden Chair',
            price: 513,
            description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
            category: {
            id: 4,
            name: 'Shoes',
            image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=5587'
            },
            images: [
            'https://api.lorem.space/image/shoes?w=640&h=480&r=4050',
            'https://api.lorem.space/image/shoes?w=640&h=480&r=1957',
            'https://api.lorem.space/image/shoes?w=640&h=480&r=4992'
            ]
        },
        ... 107 more items
    ]
 *  Unbranded Wooden Chair
 *  Shoes
 *  Finally
 */