<template>
  <div class="bg-light border p-3">
    <ul class="list-inline d-flex gap-3">
      <li v-for="(item, i) in menu" :key="i">
        <a href="#">{{ item }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      menu: ["Home", "Sobre", "Nossos Pratos", "Contato"],
    };
  },
};
</script>

<style scoped>
a {
  color: yellowgreen;
}
</style>
