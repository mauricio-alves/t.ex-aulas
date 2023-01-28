<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>Digite seu novo email!</p>
    <input type="text" ref="inputText" />
    <button @click="alertaEmail()">Confirmar</button>
    <p><b>Email atual:</b> {{ email }}</p>
  </div>
</template>

<script>
// Option API
export default {
  name: "TemplateRefs",
  props: {
    msg: String,
  },
  mounted() {
    this.$refs.inputText.focus();
  },
  watch: {
    email(novoValor, valorAtual) {
      console.log("email atual", valorAtual);
      console.log("email novo", novoValor);
    },
  },
  methods: {
    alertaEmail() {
      this.email = this.$refs.inputText.value;
      this.alerta = `Email atualizado com sucesso! Seu novo email é ${this.email}`;
      alert(this.alerta);
    },
  },
  data() {
    return {
      email: "admin@email.com",
      alerta: "",
    };
  },
};
</script>
