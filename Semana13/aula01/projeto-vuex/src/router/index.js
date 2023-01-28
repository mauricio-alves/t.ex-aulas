import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SobremesasView from "../views/SobremesasView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/sobremesas",
    name: "sobremesas",
    component: SobremesasView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
