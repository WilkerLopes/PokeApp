<template>
  <section>
    <v-pagination
      v-model="currentPage"
      :length="totalPages"
      @input="goPage()"
    ></v-pagination>

    <v-row dense class="mt-6">
      <v-col cols="6" md="3" v-for="(pokemon, index) in pokemons" :key="index">
        <v-card
          class="rounded-lg"
          width="100%"
          height="100%"
          elevation="3"
          @click="setPokemonUrl(pokemon.url)"
        >
          <v-card-text class="pa-0 py-2">
            <v-img
              lazy-src="@/assets/load.gif"
              height="84"
              width="84"
              :src="imageUrl + pokemon.id + '.png'"
              class="mx-auto"
            ></v-img>
            <p class="title text-center">{{ pokemon.name }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  props: ["imageUrl", "apiUrl"],
  data: () => {
    return {
      pokemons: [],
      previousUrl: "",
      nextUrl: "",
      currentUrl: "",
      currentPage: 1,
      totalPages: null,
    };
  },
  methods: {
    loadPokemons() {
      fetch(this.currentUrl)
        .then((resp) => resp.json())
        .then((data) => {
          this.previousUrl = data.previous ? data.previous : "";
          this.nextUrl = data.next;
          var total = data.count;

          this.totalPages = parseInt(total / 20) + 1;
          data.results.forEach((pokemon) => {
            pokemon.id = pokemon.url
              .split("/")
              .filter(function(part) {
                return !!part;
              })
              .pop();
          });

          this.pokemons = data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    goPage() {
      this.currentUrl =
        "https://pokeapi.co/api/v2/pokemon?offset=" +
        20 * (this.currentPage - 1) +
        "&limit=20";
      this.loadPokemons();
    },
    setPokemonUrl(url) {
      this.$emit("setPokemonUrl", url);
    },
  },
  created() {
    this.currentUrl = this.apiUrl;
    this.loadPokemons();
  },
};
</script>
