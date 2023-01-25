<template>
  <p class="mt-3">{{ info }}</p>
  <hr />
  <ul class="list-inline">
    <li v-for="p in pratos" :key="p.id">
      {{ p.item }}
    </li>
  </ul>
  <button @click="handleContato" class="btn btn-info my-2">
    Clique para Contato
  </button>
  <p v-show="showContato" class="mt-2">ristorante1339@email.com</p>
  <p v-show="showContato" class="mt-2">
    <a href="tel:11 999900000">(11) 999900000</a>
  </p>
  <div v-show="showContato">
    <FormContato />
  </div>
</template>

<script>
import FormContato from "./forms/FormContato.vue";

export default {
  name: "MainComp",
  components: {
    FormContato,
  },
  data() {
    return {
      info: "Conheça nossos pratos.",
      show: true,
      showContato: false,
      pratos: [
        { id: 1, item: "Salmão Grelhado" },
        { id: 2, item: "Feijoada Light" },
        { id: 3, item: "Penne ao Sugo" },
      ],
    };
  },
  methods: {
    handleContato() {
      this.showContato = !this.showContato;
    },
  },
};
</script>

<style scoped>
a {
  color: brown;
}

li::before {
  content: " + ";
}
</style>
