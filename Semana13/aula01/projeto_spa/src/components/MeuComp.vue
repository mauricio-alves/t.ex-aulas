<template>
  <h1 ref="title">Bora codar com {{ vue }} Js!</h1>
</template>

<script>
export default {
  name: "MeuComp",
  data() {
    return {
      vue: "Vue 4",
    };
  },
  // HOOKS LIFE CYCLE
  // Antes de criar a instância Vue
  beforeCreate() {
    console.log("beforeCreate");
    console.log("Data", this.vue);
    console.log("DOM", this.$refs.title);
  },

  // Instância criada
  created() {
    console.log("created");
    console.log("Data", this.vue);
    console.log("DOM", this.$refs.title);
  },

  // Antes de montar o elemento
  beforeMount() {
    console.log("beforeMount");
    console.log("Data", this.vue);
    console.log("DOM", this.$refs.title);
  },

  // Montagem concluída
  mounted() {
    console.log("mounted");
    console.log("Data", this.vue);
    console.log("DOM", this.$refs.title);
  },

  // Antes de atualizar os dados
  beforeUpdate() {
    console.log("beforeUpdate");
    console.log("Data", this.vue);
    console.log("DOM", this.$refs.title);
  },

  // Atualização concluída
  updated() {
    console.log("updated");
    console.log("Data", this.vue);
    console.log("DOM", this.$refs.title);
  },

  // Antes de desmontar o elemento
  beforeUnmount() {
    console.log("beforeUnmount");
    console.log("Data", this.vue);
    console.log("DOM", this.$refs.title);
  },

  // Desmontagem concluída
  unmounted() {
    console.log("unmounted");
    console.log("Data", this.vue);
    console.log("DOM", this.$refs.title);
  },
};
</script>
