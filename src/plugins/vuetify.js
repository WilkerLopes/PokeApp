import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

const Theme = {
  primary: "#008ce3",
  background: "#f9f9fa",
  white: "#f9f9fa",
  // pokemons classes
  grass: "#48D0B0",
  fire: "#FB6C6C",
  water: "#73BAFC",
  normal: "#a8a878",
  flying: "#5db8b1",
  bug: "#a8b820",
  poison: "#a040a0",
  electric: "#FFCE4B",
  ground: "#e0c068",
  fighting: "#c03028",
  psychic: "#f85888",
  rock: "#b8a038",
  ice: "#98d8d8",
  ghost: "#705898",
  dragon: "#7038f8",
  dark: "#5e4531",
  steel: "#7a8d89",
  fairy: "#ee99ac",
};

export default new Vuetify({
  customVariables: ["./custon.scss"],
  theme: {
    themes: {
      light: Theme,
    },
  },
  treeShake: true,
  options: {
    customProperties: true,
  },
});
