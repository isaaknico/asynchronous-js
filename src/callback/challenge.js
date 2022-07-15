const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; // Llamado a xmlhttprequest
const API = 'https://api.escuelajs.co/api/v1'; // Llamado a API. API en mayúscula porque es una referencia que no va a cambiar

// Funcion que hace Llamado usando xmlhttprequest
function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest(); // Referencia de nueva instancia de XMLHttpRequest

    // Abre conexion a API
    xhttp.open('GET', urlApi, true); // urlApi: No confundir con url base de API
    
    xhttp.onreadystatechange = function (event) {
        // Valida estado en que se encuentra la petición
        if (xhttp.readyState === 4) { // Si ya se completó la petición
            // Valida status de respuesta de la petición
            if (xhttp.status === 200) { // Si la solicitud ha sido correcta
                // Llama a callback recibida como param
                callback(null, JSON.parse(xhttp.responseText)); // Manda como args: null porque no hubo erro y Dentro de xhttp.responseTex recibe lo que entrega el servidor en texto y lo transforma a JSON
            } else {
                const error = new Error('Error' + urlApi);
                // Retorna callback recibida como param
                return callback(error, null); // Manda como args: valor de error y null porque no regresa ningún dato.
            }
        } 
    }

    xhttp.send();
}

// Llamadas a funcion fetchData
fetchData(`${ API }/products`, function (error1, data1) { // Manda como args: la url y la funcion callback con su lógica.
    if (error1) return console.error(error1); // Si regresa error, detiene toda lógica y retorna el error obtenido.
    
    fetchData(`${ API }/products/${ data1[0].id }`, function (error2, data2) { // Manda como args: la url completada con data obtenida en anterior llamada y la funcion callback con su lógica.
        if (error2) return console.error(error2);
        
        fetchData(`${ API }/categories/${ data2?.category?.id }`, function (error3, data3) { // Manda como args: la url completada con data obtenida en anterior llamada y la funcion callback con su lógica.
            if (error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
            /**
             * {
                    id: 37,
                    title: 'Refined Steel Keyboard',
                    price: 467,
                    description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
                    category: {
                        id: 5,
                        name: 'Others',
                        image: 'https://api.lorem.space/image?w=640&h=480&r=550'
                    },
                    images: [
                        'https://api.lorem.space/image?w=640&h=480&r=7938',
                        'https://api.lorem.space/image?w=640&h=480&r=5013',
                        'https://api.lorem.space/image?w=640&h=480&r=4375'
                    ]
                }

                Refined Steel Keyboard

                Others
             */
        });
    });
});