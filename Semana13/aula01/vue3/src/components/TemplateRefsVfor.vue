<template>
  <h3>Lista de Sobremesas</h3>
  <ul>
    <li v-for="sobremesa in sobremesas" :key="sobremesa" :ref="arr.elementos">
      {{ sobremesa }}
    </li>
  </ul>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";

// Composition API
// sempre é necessário declarar suas variáveis sobre uma ref no setup, e nessa ref deve colocar os valores iniciais das variáveis e sempre precisará de return para serem exibidos na tela. O ref permite que seja tudo reativo (atualizando as informações na tela em tempo real).
export default {
  name: "TemplateRefsVFor",
  setup() {
    const sobremesas = ref([
      "Bomba de Chocolate",
      "Quindim",
      "Mousse",
      "Sorvete de Pistache",
    ]);
    const elementos = ref([]);
    const arr = { elementos };

    onMounted(() => {
      console.log(elementos.value.map((el) => el.textContent));
    });
    return {
      sobremesas,
      elementos,
      arr,
    };
  },
};
</script>

<style scoped>
h3,
li {
  text-align: left;
}
</style>
