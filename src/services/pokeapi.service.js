import Request from "./request.service";

class PokeApiService {
  async pokemons() {
    var total = await Request("/pokemon?limit=1");
    console.log(total.count);
    var list = await Request("/pokemon?limit=" + total.count);

    list.results.forEach(async (pokemon) => {
      pokemon.id = pokemon.url
        .split("/")
        .filter(function(part) {
          return !!part;
        })
        .pop();

      pokemon.picture =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
        pokemon.id +
        ".png";
    });
    return list;
  }

  async pokemon(id) {
    return await Request("/pokemon/" + id);
  }

  async moves() {
    return await Request("/type");
  }

  async abilities() {
    return await Request("/ability");
  }

  async items() {
    return await Request("/type");
  }

  async locations() {
    return await Request("/location");
  }

  async types() {
    return await Request("/type");
  }
}

export default new PokeApiService();
