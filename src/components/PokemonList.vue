<template>
  <section>
    <v-row dense class="mt-6">
      <v-col
        cols="6"
        md="3"
        lg="2"
        v-for="(pokemon, index) in pokemons"
        :key="index"
      >
        <v-card
          class="rounded-lg"
          width="100%"
          height="100%"
          elevation="3"
          @click="setPokemonUrl(pokemon.url)"
          :class="['bg-' + pokemon.types[0].type.name]"
        >
          <v-card-text class="pa-2 pokemon-item">
            <div class="infos">
              <h1 class="title white--text mb-3">{{ pokemon.name }}</h1>
              <div
                v-for="(value, index) in pokemon.types"
                :key="'value' + index"
                class="mb-1"
              >
                <v-chip class="chip-type white--text" small>
                  {{ value.type.name }}
                </v-chip>
              </div>
            </div>
            <v-img
              lazy-src="@/assets/load.gif"
              height="84"
              width="84"
              max-width="50%"
              contain
              :src="imageUrl + pokemon.id + '.png'"
            ></v-img>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <div
      ref="infinitescrolltrigger"
      class="d-flex align-center justify-center pa-16"
    >
      <v-progress-circular
        size="48"
        indeterminate
        color="primary"
      ></v-progress-circular>
    </div>
  </section>
</template>

<script>
export default {
  props: ["imageUrl", "apiUrl"],
  data: () => {
    return {
      pokemons: [],
      nextUrl: "",
      currentUrl: "",
    };
  },
  methods: {
    loadPokemons() {
      fetch(this.currentUrl)
        .then((resp) => resp.json())
        .then((data) => {
          this.nextUrl = data.next;
          data.results.forEach(async (pokemon) => {
            pokemon.id = pokemon.url
              .split("/")
              .filter(function(part) {
                return !!part;
              })
              .pop();

            pokemon.types = await this.getTypes(pokemon.id);

            this.pokemons.push(pokemon);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    scrollTrigger() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0 && this.nextUrl) {
            this.next();
          }
        });
      });
      observer.observe(this.$refs.infinitescrolltrigger);
    },
    next() {
      this.currentUrl = this.nextUrl;
      this.loadPokemons();
      console.log("next");
    },
    setPokemonUrl(url) {
      this.$emit("setPokemonUrl", url);
    },
    async getTypes(id) {
      var types = await fetch(this.apiUrl + id)
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          return data.types;
        })
        .catch((error) => {
          console.log(error);
        });
      return types;
    },
  },
  created() {
    this.currentUrl = this.apiUrl;
    this.loadPokemons();
  },
  mounted() {
    this.scrollTrigger();
  },
};
</script>
<style lang="scss">
.pokemon-item {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  .v-image {
    margin-top: 24px !important;
  }
  .infos {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    padding: 8px;
  }
}
</style>
