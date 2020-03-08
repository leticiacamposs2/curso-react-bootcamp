/*
 *
 * { Anotações sobre asynAwait }
 * 
 * sincronismo no javascript
 * define resultados esperados para continuar
 *
 * fetch uma api do browser
 * só funciona no navegador porque é um API do navegador
 * trás a resposta de uma API
 * 
*/

async function getPerson(id) {
    const response = await
fetch(`http://swapi.co/api/people/${id}`)
    const person = await response.json;
    return person
}

getPerson(1)
    .then(person => console.log(person))
    .catch(error => console.log(error))