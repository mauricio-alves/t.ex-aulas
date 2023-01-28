<template>
  <p>Pedidos Anteriores</p>
  <h4>
    Foram encontradas <span>{{ msgPedidos }}</span> ocorrências.
  </h4>
  <ul>
    <li v-for="pedido in user.pedidos" :key="pedido">{{ pedido }}</li>
  </ul>
</template>

<script>
// Option API
// Diferenças em usar computed ao invés de methods: 
// computed é armazenado em cache, tem base em dependências reativas e só será
// reavaliada quando uma de suas dependências reativas for alterada.
// computed é, por padrão, um getter.
// method sempre será renderizado quando for invocado, havendo alteração em 
// seus dados ou não, já o computed só fará isso se houver alteração (se não 
// houver, usa o cache).

// Assim, para obter melhor performance, use computed sempre que possível, use
// methods apenas quando não precisar de cache.

export default {
  name: "OptionAPI",
  data() {
    return {
      user: {
        nome: "Tom Mazzeo",
        pedidos: [
          "Lazanha 4 queijos",
          "Feijoada",
          "Sopa de Legumes",
          "Macarronada",
        ],
      },
    };
  },
  computed: {
    // getter
    msgPedidos() {
      return this.user.pedidos.length > 0 ? this.user.pedidos.length : "0";
    },
  },
};
</script>
