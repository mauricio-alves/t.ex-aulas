import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SobremesasView from "../views/SobremesasView.vue";
import PratosQuentesView from "../views/PratosQuentesView.vue";

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
  {
    path: "/pratos-quentes",
    name: "pratosQuentes",
    component: PratosQuentesView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
