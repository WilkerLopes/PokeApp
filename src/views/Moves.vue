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
        Movimentos
      </v-app-bar-title>
    </v-app-bar>

    <v-sheet
      id="scrollingTarget"
      class="overflow-y-auto pt-16 fill-height transparent"
      max-height="100vh"
    >
      <main class="pt-16">
        <v-container>
          {{ moves }}
        </v-container>
      </main>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "Moves",
  metaInfo: {
    titleTemplate: "%s - Movimentos",
  },
  data: () => {
    return {};
  },
  computed: {
    moves() {
      return this.$store.state.moves;
    },
  },
};
</script>
