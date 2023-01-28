<template>
  <div class="box">
    <h3>Saboreie nossas delícias!</h3>
    <span>Estamos abertos 24hrs.</span>
    <div class="box box__produto">
      <!-- Exemplo de consumo de dados via props -->
      <!-- <div v-for="item in produtos.sobremesas" :key="item">
        {{ item.nome }} - R$ {{ item.preco }},00
      </div> -->

      <div v-for="item in loja" :key="item">
        {{ item.nome }} - R$ {{ item.preco }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemProduto",
  data() {
    return {
      // type: "sobremesas",
    };
  },

  // Exemplo de consumo de dados via props
  props: {
    type: String,
  },

  // Exemplo de consumo de dados via Vuex
  computed: {
    // Exemplo de consumo de dados via state
    produtos() {
      return this.$store.state.produtos;
    },

    // Exemplo de consumo de dados via getters
    loja() {
      return this.$store.getters.loja(this.type);
      // outra forma de chamar a loja sobremesas via getters:
      // return this.$store.getters["loja"];
    },
  },

  // Exemplo de consumo de dados via mutations
  methods: {
    aplicarDesconto() {
      // return this.$store.commit("aplicarDesconto");

      // Exemplo de confirmação de mutations via actions
      return this.$store.dispatch("aplicarDesconto", this.type);
    },
  },

  // Chama o método apenas após a montagem do componente
  mounted() {
    this.aplicarDesconto();
  },
};
</script>

<style scoped>
h3 {
  text-align: left;
  padding: 0 1rem;
}
.box {
  text-align: left;
  padding: 1rem;
  margin: 1.3rem;
  box-shadow: 2px 2px 40px rgb(225, 229, 229);
  width: 50%;
  border-radius: 0 0 0.8rem 0.8rem;
  background-color: rgba(145, 208, 223, 0.656);
}
.box div {
  margin: 0.4rem 0;
}
.box__produto div::before {
  content: "+ ";
}
</style>
