<template>
  <v-sheet
    max-height="100vh"
    class="overflow-y-auto overflow-x-hidden grey lighten-3"
  >
    <v-card color="white" class="container-card mb-8" elevation="0">
      <v-container class="front-image">
        <h1
          class="display-1 font-weight-bold grey--text text--darken-4 title-page mb-8 mt-16"
        >
          Qual pokemon você está procurando?
        </h1>

        <v-text-field
          placeholder="Pesquise Pokemons, Movimentos etc."
          filled
          rounded
          dense
          prepend-inner-icon="mdi-magnify"
          hide-details="true"
          clearable
          class="mb-16"
        ></v-text-field>

        <v-row dense>
          <v-col
            cols="6"
            md="4"
            lg="2"
            v-for="(card, index) in cards"
            :key="index"
          >
            <v-card
              :to="card.router"
              :class="[card.color, card.shader]"
              class="rounded-lg card-types mb-2 mx-auto"
              max-width="97%"
            >
              <v-card-text>
                <h1 class="title pa-0 ma-0 font-weight-medium white--text ">
                  {{ card.title }}
                </h1>

                <img src="/assets/pokeboll_shade.png" />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <img src="/assets/pokeboll_shade.png" class="pokeball-page" />
    </v-card>

    <v-container>
      <div class="d-flex align-center justify-space-between mb-4">
        <h2 class="title font-weight-bold">Pokémons News</h2>
        <v-btn color="primary" text small :ripple="false" to="/news">
          <div class="text-none">
            Ver todos
          </div>
        </v-btn>
      </div>

      <v-row v-for="load in 5" :key="load">
        <v-col cols="6" md="8">
          <v-skeleton-loader type="sentences" class="mb-4"></v-skeleton-loader>
          <v-skeleton-loader type="text" width="60"></v-skeleton-loader>
        </v-col>
        <v-col cols="6" md="4">
          <v-skeleton-loader
            type="image"
            height="120"
            class="rounded-lg"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: "Home",
  metaInfo: {
    titleTemplate: "%s",
  },
  data() {
    return {
      cards: [
        {
          title: "Pokedex",
          router: "/pokedex",
          color: "bg-grass",
          shader: "sh-grass",
        },
        {
          title: "Movimentos",
          router: "/moves",
          color: "bg-fire",
          shader: "sh-fire",
        },
        {
          title: "Habilidades",
          router: "/abilities",
          color: "bg-water",
          shader: "sh-water",
        },
        {
          title: "Items",
          router: "/items",
          color: "bg-electric",
          shader: "sh-electric",
        },
        {
          title: "Locais",
          router: "/locations",
          color: "bg-poison",
          shader: "sh-poison",
        },
        {
          title: "Tipos",
          router: "/types",
          color: "bg-dark",
          shader: "sh-dark",
        },
        //
      ],
    };
  },
};
</script>

<style lang="scss">
.container-card {
  border-radius: 0 0 32px 32px !important;
  padding: 64px 0 48px;
  .title-page {
    letter-spacing: -2px !important;
    line-height: 1;
  }
  .v-input__slot {
    padding: 0 12px !important;
  }
  .card-types {
    position: relative;
    overflow: hidden;
    img {
      position: absolute;
      top: 50%;
      right: 0;
      height: 150%;
      transform: translate(15%, -50%);
    }
  }
}
</style>
