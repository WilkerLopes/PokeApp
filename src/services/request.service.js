const URL = "https://pokeapi.co/api/v2";

/**
 * Função prar fazer todas as requisições usando o fetch()
 *
 * @param {String} router
 * @param {Object} options
 */
export default function requestService(router) {
  return fetch(URL + router)
    .then((resp) => resp.json())
    .then(function(response) {
      return response;
    });
}
