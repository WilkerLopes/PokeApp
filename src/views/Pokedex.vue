<template>
  <div>
    <v-app-bar
      absolute
      color="white"
      dark
      shrink-on-scroll
      prominent
      scroll-target="#scrollingTarget"
      elevate-on-scroll
      elevation="6"
    >
      <v-btn text icon color="grey darken-4" to="/">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-app-bar-title
        class="display-1 font-weight-black grey--text text--darken-4 px-0 pb-1 pt-0"
      >
        Pokedex
      </v-app-bar-title>
    </v-app-bar>

    <v-sheet
      id="scrollingTarget"
      class="overflow-y-auto pt-16 fill-height transparent"
      max-height="100vh"
    >
      <main class="pt-16">
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
    </v-sheet>
  </div>
</template>

<script>
import PokemonList from "@/components/PokemonList.vue";
import PokemonView from "@/components/PokemonView.vue";

export default {
  name: "Pokedex",
  metaInfo: {
    titleTemplate: "%s - Pokedex",
  },
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
