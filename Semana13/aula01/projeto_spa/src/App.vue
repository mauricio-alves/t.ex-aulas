<template>
  <HeaderComp />
  <NavBar />
  <SobreComp />
  <hr />
  <MeuComp v-if="show" />
  <MainComp />
  <FooterComp />
  <div class="boxSetoresMain">
    <SetoresContato>
      <template #emailSetor="{ email }">
        <p>Email: {{ email.email_reservas }}</p>
      </template>
    </SetoresContato>
    <SetoresContato>
      <h3>Financeiro</h3>
      <template #emailSetor="{ email }">
        <p>Email: {{ email.email_financeiro }}</p>
      </template>
    </SetoresContato>
    <SetoresContato>
      <h3>Outras Informações</h3>
      <template></template>
    </SetoresContato>
  </div>
</template>

<script>
// importando o bootstrap no arquivo root
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import HeaderComp from "./components/HeaderComp.vue";
import NavBar from "./components/NavBar.vue";
import SobreComp from "./components/SobreComp.vue";
import MeuComp from "./components/MeuComp.vue";
import MainComp from "./components/MainComp.vue";
import FooterComp from "./components/FooterComp.vue";
import SetoresContato from "./components/SetoresContato.vue";

export default {
  name: "App",
  components: {
    HeaderComp,
    NavBar,
    SobreComp,
    MeuComp,
    MainComp,
    FooterComp,
    SetoresContato,
  },
};
</script>

<style>
.boxSetoresMain {
  display: flex;
}
</style>
