import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

// Funcion async para consumir api, recibe la url de la api a la que queremos llamar y retorna la data en json de fetch.
// Estructura convencional async/await
// Lógica de async: ir por los datos, luego esperar por ellos y finalmente retornarlos hacia el usuario
async function fetchData(urlApi) {
    const response = await fetch(urlApi); // Recordar que fetch es una promesa por defecto.
    const data = await response.json(); // Transforma a json
    return data;
}

// Función async guardada en variable para hacer solicitudes.
// Esctructura con arrow functions async/await
const anotherFunction = async (urlApi) => {
    try {
        // Toda la logica de nuestra app
        const products = await fetchData(`${ urlApi }/products`);
        const product = await fetchData(`${ urlApi }/products/${ products[0].id }`);
        const category = await fetchData(`${ urlApi }/categories/${ product.category.id }`)
    
        console.log(products);
        console.log(product.title);
        console.log(category.name);
    } catch (error) {
        // Recibe promesas que resulten en reject y atrapa el error en caso de que haya uno.
        console.log(error);
    }
}

anotherFunction(API); // Llamado a funcion que hace solicitudes

/**
 * Output:
 * 
 *  [
 *      {
            id: 107,
            title: 'Fantastic Frozen Shoes',
            price: 987,
            description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
            category: {
            id: 4,
            name: 'Shoes',
            image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=2682'
            },
            images: [
            'https://api.lorem.space/image/shoes?w=640&h=480&r=7314',
            'https://api.lorem.space/image/shoes?w=640&h=480&r=444',
            'https://api.lorem.space/image/shoes?w=640&h=480&r=2931'
            ]
        },
        ... 97 more items
    ]
    New Title
    Furniture
 */