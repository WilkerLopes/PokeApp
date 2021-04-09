import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/pokedex",
    name: "Pokedex",
    component: () =>
      import(/* webpackChunkName: "pokedex" */ "../views/Pokedex.vue"),
  },
  {
    path: "/moves",
    name: "Movimentos",
    component: () =>
      import(/* webpackChunkName: "moves" */ "../views/Moves.vue"),
  },
  {
    path: "/abilities",
    name: "Habilidades",
    component: () =>
      import(/* webpackChunkName: "abilities" */ "../views/Abilities.vue"),
  },
  {
    path: "/items",
    name: "Items",
    component: () =>
      import(/* webpackChunkName: "items" */ "../views/Items.vue"),
  },
  {
    path: "/locations",
    name: "Locais",
    component: () =>
      import(/* webpackChunkName: "localtions" */ "../views/Locations.vue"),
  },
  {
    path: "/types",
    name: "Tipos",
    component: () =>
      import(/* webpackChunkName: "types" */ "../views/Types.vue"),
  },
  {
    path: "/news",
    name: "News",
    component: () => import(/* webpackChunkName: "news" */ "../views/News.vue"),
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: "smooth",
      };
    }
  },
});

export default router;
