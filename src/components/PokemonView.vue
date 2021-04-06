<template>
  <v-dialog v-model="show" transition="dialog-bottom-transition" fullscreen>
    <v-card v-if="!load" class="fill-height">
      <v-card
        tile
        class="d-flex justify-space-between flex-column fill-height"
        :class="['bg-' + pokemon.types[0].type.name]"
        v-if="pokemon"
      >
        <div>
          <v-toolbar
            class="transparent"
            fixed
            flat
            width="100%"
            tile
            elevation="0"
            height="56px"
          >
            <v-btn @click="closeDetail" icon dark>
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-container>
            <div class="white--text d-flex align-center justify-space-between">
              <div>
                <div class="display-1 font-weight-bold text-capitalize">
                  {{ pokemon.name }}
                </div>
                <v-chip
                  class="mr-2"
                  small
                  v-for="(value, index) in pokemon.types"
                  :key="'value' + index"
                >
                  {{ value.type.name }}</v-chip
                >
              </div>
              <div class="font-font-weight-black subtitle-1">
                #{{ pokemon.id }}
              </div>
            </div>
          </v-container>
        </div>

        <div>
          <v-img
            lazy-src="@/assets/load.gif"
            width="75vw"
            height="75vw"
            max-height="300px"
            max-width="300px"
            :src="imageUrl + pokemon.id + '.png'"
            class="mx-auto image"
          ></v-img>

          <v-card class="detail white">
            <v-card-text class="pt-16">
              <v-card
                tile
                elevation="0"
                class=" mx-auto "
                width="100%"
                max-width="500px"
              >
                <v-tabs v-model="tab">
                  <v-tab>
                    <div class="subtitle-2 text-capitalize">Detalhes</div>
                  </v-tab>
                  <v-tab>
                    <div class="subtitle-2 text-capitalize">Estatistícas</div>
                  </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab" width="300px" class="mt-8">
                  <v-tab-item>
                    <v-row dense>
                      <v-col
                        cols="3"
                        class="text--secondary grey--text caption"
                      >
                        Espécie
                      </v-col>
                      <v-col cols="9">
                        {{ pokemon.species.name }}
                      </v-col>
                    </v-row>
                    <v-row dense>
                      <v-col
                        cols="3"
                        class="text--secondary grey--text caption"
                      >
                        Altura
                      </v-col>
                      <v-col cols="9">
                        {{ pokemon.height / 10 + "cm" }}
                      </v-col>
                    </v-row>
                    <v-row dense>
                      <v-col
                        cols="3"
                        class="text--secondary grey--text caption"
                      >
                        Peso
                      </v-col>
                      <v-col cols="9">
                        {{ pokemon.weight / 10 + "kg" }}
                      </v-col>
                    </v-row>
                    <v-row dense>
                      <v-col
                        cols="3"
                        class="text--secondary grey--text caption"
                      >
                        Ablidades
                      </v-col>
                      <v-col cols="9" class="d-flex ">
                        <div
                          v-for="(abilitie, index) in pokemon.abilities"
                          :key="index"
                        >
                          {{ index != 0 ? ", " : "" }}
                          {{ abilitie.ability.name }}
                        </div>
                      </v-col>
                    </v-row>
                  </v-tab-item>

                  <v-tab-item>
                    <v-row
                      dense
                      v-for="(stat, index) in pokemon.stats"
                      :key="index"
                    >
                      <v-col
                        cols="3"
                        class="text--secondary grey--text caption"
                      >
                        {{ stat.stat.name }}
                      </v-col>
                      <v-col cols="9">
                        <div class="font-weight-bold d-flex align-center">
                          {{ stat.base_stat }}

                          <v-progress-linear
                            class="ml-4"
                            v-model="stat.base_stat"
                            :color="pokemon.types[0].type.name"
                          ></v-progress-linear>
                        </div>
                      </v-col>
                    </v-row>
                  </v-tab-item>
                </v-tabs-items>
              </v-card>
            </v-card-text>
          </v-card>
        </div>
      </v-card>

      <v-card
        v-if="!pokemon"
        class="shadow-card d-flex align-center justify-center fill-height"
        tile
      >
        <div class="rounded-lg pa-12 elevation-8 text-center">
          <div class="title font-weight-black">
            Pokemon não existe
          </div>
          <div class="subtitle-1">O pokemon informado não existe</div>
          <v-btn @click="closeDetail" dark block class="mt-8">
            Voltar
          </v-btn>
        </div>
      </v-card>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["pokemonUrl", "show"],
  data: () => {
    return {
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/",
      pokemon: {},
      load: true,
      tab: null,
    };
  },
  methods: {
    loadPokemon() {
      fetch(this.pokemonUrl)
        .then((resp) => {
          if (resp.status === 200) {
            return resp.json();
          } else {
            this.pokemon = false;
            return;
          }
        })
        .then((data) => {
          this.pokemon = data;
          this.load = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    closeDetail() {
      this.$emit("closeDetail");
    },
  },
  created() {
    this.loadPokemon();
  },
};
</script>

<style lang="scss">
.image {
  z-index: 2;
  position: relative;
  filter: drop-shadow(2px 2px 6px #02020262);
}
.detail {
  z-index: 1;
  position: relative;
  border-radius: 32px 32px 0 0 !important;
  margin-top: -64px !important;
}
</style>
