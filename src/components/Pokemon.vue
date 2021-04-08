<template>
  <div>
    <v-app-bar color="white" elevation="2" fixed>
      <v-container
        class="d-flex align-center justify-space-between flex-MD-column"
      >
        <div class="title font-weight-medium text--primary">PokeApp</div>
        <Search :apiUrl="apiUrl" @setPokemonUrl="setPokemonUrl" />
      </v-container>
    </v-app-bar>

    <main class="pt-12">
      <v-container>
        <PokemonList
          :imageUrl="imageUrl"
          :apiUrl="apiUrl"
          @setPokemonUrl="setPokemonUrl"
        />
      </v-container>

      <PokemonView
        :pokemonUrl="pokemonUrl"
        :show="showDetail"
        v-if="showDetail"
        @closeDetail="closeDetail"
      />
    </main>
  </div>
</template>

<script>
import Search from "./Search";
import PokemonList from "./PokemonList.vue";
import PokemonView from "./PokemonView.vue";

export default {
  name: "Pokemons",
  data: () => {
    return {
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/",
      apiUrl: "https://pokeapi.co/api/v2/pokemon/",
      pokemonUrl: "",
      showDetail: false,
    };
  },
  components: {
    Search,
    PokemonList,
    PokemonView,
  },
  methods: {
    setPokemonUrl(url) {
      this.pokemonUrl = url;
      this.showDetail = true;
    },
    closeDetail() {
      this.pokemonUrl = "";
      this.showDetail = false;
    },
  },
};
</script>
