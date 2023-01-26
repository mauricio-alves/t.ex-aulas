<template>
  <NavBar />
  <p class="p-3"><a href="#">Aproveite nossas promoções!</a></p>
  <!-- <img
    class="w-25"
    :src="require('@/assets/produtos/noodles-7390775_1920.jpg')"
    alt="Penne ao Sugo"
  /> -->
  <div class="border p-3 mb-5">
    <img
      class="w-50"
      :src="urlImage"
      :alt="altImage"
      data-bs-toggle="modal"
      data-bs-target="#modalVue"
    />
    <h4 class="py-3">{{ altImage }}</h4>
    <ButtonImage @trocarImagem="handleSwitchImage" />
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import ButtonImage from "./ButtonImage.vue";

export default {
  name: "MenuImage",
  components: {
    NavBar,
    ButtonImage,
  },
  data() {
    return {
      urlImage: require("@/assets/produtos/noodles-7390775_1920.jpg"),
      altImage: "Penne ao Sugo",
    };
  },
  methods: {
    handleSwitchImage() {
      this.urlImage = require("@/assets/produtos/taco-4709325_1920.jpg");
      this.altImage = "Tacos Sortidos";
    },
  },
};
</script>

<style scoped>
a {
  color: steelblue;
}

img {
  cursor: pointer;
}
</style>
