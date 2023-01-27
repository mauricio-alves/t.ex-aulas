<template>
  <TemplateRefs msg="Exemplo: Template Refs"/>
  <hr />
  <!-- <TemplateRefsVfor /> -->
  <hr />
  <!-- <OptionAPI /> -->

</template>

<script>
// import OptionAPI from './components/OptionAPI.vue'
import TemplateRefs from './components/TemplateRefs.vue'
// import TemplateRefsVfor from './components/TemplateRefsVfor.vue'


export default {
  name: 'App',
  components: {
    TemplateRefs,
    // TemplateRefsVfor,
    // OptionAPI
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
