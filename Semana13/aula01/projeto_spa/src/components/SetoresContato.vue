<template>
  <div class="boxSetores p-4 mx-3 my-4">
    <slot>
      <h3>Reservas</h3>
    </slot>
    <slot name="emailSetor" :email="{ email_reservas, email_financeiro }">
      <p>Email: ristorante@email.com.br</p>
    </slot>
    <RedesSociais />
  </div>
</template>

<script>
import RedesSociais from "./RedesSociais.vue";

export default {
  name: "SetoresContato",
  components: { RedesSociais },
  data() {
    return {
      email_reservas: "reservas@email.com.br",
      email_financeiro: "financeiro@email.com.br",
    };
  },
};
</script>

<style scoped>
.boxSetores {
  box-shadow: 8px 8px 8px gray;
  border: 1px solid gray;
  border-radius: 12px;
  width: 32%;
}
</style>
