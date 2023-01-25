<template>
  <input
    type="text"
    class="d-block mb-3"
    :id="nameTxt"
    :name="nameTxt"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: "InputText",
  props: {
    nameTxt: {
      type: String,
      default: "Definir o campo",
    },
    placeholder: {
      type: String,
      default: "Preencha este campo",
    },
  },
};
</script>
