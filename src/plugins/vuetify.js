import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

const Theme = {
  primary: "#008ce3",
  grass: "#78c850",
  fire: "#f08030",
  water: "#6890f0",
  normal: "#a8a878",
  flying: "#5db8b1",
  bug: "#a8b820",
  poison: "#a040a0",
  electric: "#f8d030",
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
  customVariables: ["./vuetify.scss"],
  theme: {
    themes: {
      light: Theme,
    },
  },
});
