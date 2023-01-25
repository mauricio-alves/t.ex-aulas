<template>
  <HeaderComp />
  <NavBar />
  <SobreComp />
  <hr />
  <MeuComp v-if="show" />
  <MainComp />
  <FooterComp />
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";
import NavBar from "./components/NavBar.vue";
import SobreComp from "./components/SobreComp.vue";
import MeuComp from "./components/MeuComp.vue";
import MainComp from "./components/MainComp.vue";
import FooterComp from "./components/FooterComp.vue";

export default {
  name: "App",
  components: { HeaderComp, NavBar, SobreComp, MeuComp, MainComp, FooterComp },
};
</script>
