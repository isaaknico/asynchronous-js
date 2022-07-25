import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

// Promesa
function* fetchData (urlApi) {
    const response = fetch(urlApi);
    yield response.json();
    
}

// Funcion async

// Llamados