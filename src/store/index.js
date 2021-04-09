import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import PokeAPI from "../services/pokeapi.service";

export default new Vuex.Store({
  state: {
    pokemons: {
      load: true,
      list: [],
    },
    moves: {
      load: true,
      list: [],
    },
    abilities: {
      load: true,
      list: [],
    },
    items: {
      load: true,
      list: [],
    },
    locations: {
      load: true,
      list: [],
    },
    types: {
      load: true,
      list: [],
    },
  },
  actions: {
    /*
    login({ commit }, user) {
      return AuthService.login(user).then(user => {
        commit('loginSuccess', user);
        return Promise.resolve(user);
      }, error => {
        commit('loginFailure');
        return Promise.reject(error);
      });
    },
    */
    getPokemons({ commit }) {
      PokeAPI.pokemons().then((result) => {
        commit("savePokemons", result);
      });
    },
    getMoves({ commit }) {
      PokeAPI.moves().then((result) => {
        commit("saveMoves", result);
      });
    },
    getAbilities({ commit }) {
      PokeAPI.abilities().then((result) => {
        commit("saveAbilities", result);
      });
    },
    getItems({ commit }) {
      PokeAPI.items().then((result) => {
        commit("saveItems", result);
      });
    },
    getLocations({ commit }) {
      PokeAPI.locations().then((result) => {
        commit("saveLocations", result);
      });
    },
    getTypes({ commit }) {
      PokeAPI.types().then((result) => {
        commit("saveTypes", result);
      });
    },
  },
  mutations: {
    savePokemons(state, pokemons) {
      console.log(pokemons);
      state.pokemons.list = pokemons;
      state.pokemons.load = false;
    },
    saveMoves(state, moves) {
      state.moves.list = moves;
      state.moves.load = false;
    },
    saveAbilities(state, abilities) {
      state.abilities.list = abilities;
      state.abilities.load = false;
    },
    saveItems(state, items) {
      state.items.list = items;
      state.items.load = false;
    },
    saveLocations(state, locations) {
      state.locations.list = locations;
      state.locations.load = false;
    },
    saveTypes(state, types) {
      state.types.list = types;
      state.types.load = false;
    },
  },
});
