<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "Index",
  metaInfo: {
    title: "PokeApp",
    htmlAttrs: {
      lang: "pt-BR",
    },
  },
  created() {
    this.$store.dispatch("getPokemons");
    this.$store.dispatch("getMoves");
    this.$store.dispatch("getAbilities");
    this.$store.dispatch("getItems");
    this.$store.dispatch("getLocations");
    this.$store.dispatch("getTypes");
  },
};
</script>

<style lang="scss"></style>
