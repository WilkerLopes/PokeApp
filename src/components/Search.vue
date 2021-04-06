<template>
  <form @submit.prevent="setPokemonUrl">
    <v-text-field
      v-model="searchvalue"
      label="Qual pokemon procura?"
      outlined
      hide-details=""
      dense
      class="rounded-lg"
    ></v-text-field>
  </form>
</template>

<script>
export default {
  props: ["apiUrl"],
  data: () => {
    return {
      searchvalue: "",
    };
  },
  methods: {
    setPokemonUrl(url) {
      if (this.searchvalue !== "")
        this.$emit(
          "setPokemonUrl",
          this.apiUrl + this.searchvalue.toLowerCase()
        );
    },
  },
};
</script>
