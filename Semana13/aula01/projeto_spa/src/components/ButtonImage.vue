<template>
  <button
    @click="$emit('trocarImagem')"
    class="btn btn-success mt-4 text-white"
  >
    Veja outros pratos top 10
  </button>
</template>

<script>
export default {
  name: "ButtonImage",
  emits: ["trocarImagem"],
};
</script>
