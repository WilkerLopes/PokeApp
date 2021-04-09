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
        News
      </v-app-bar-title>
    </v-app-bar>

    <v-sheet
      id="scrollingTarget"
      class="overflow-y-auto pt-16 fill-height transparent"
      max-height="100vh"
    >
      <main class="pt-16">
        <v-container>
          <v-row v-for="load in 15" :key="load">
            <v-col cols="6" md="8">
              <v-skeleton-loader
                type="sentences"
                class="mb-4"
              ></v-skeleton-loader>
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
      </main>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "News",
  metaInfo: {
    titleTemplate: "%s - News",
  },
  data: () => {
    return {};
  },
};
</script>
