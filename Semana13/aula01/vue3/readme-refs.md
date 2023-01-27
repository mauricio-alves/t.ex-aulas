## Vue Template Refs 

[ x ] fornece ao JavaScript uma referência para acessar facilmente o template
[ x ] acesso rápido a um componente ou elemento HTML
[ x ] API de composição é outra maneira de usar refs de template
[ x ] une o conceito de refs reativos e refs de template
[ x ] apenas uma sintaxe em nosso JavaScript para ambas as situações
[ x ] pode ser usado na API de opções e na API de composição


Declarar Referências

[ x ] aplicar o foco em um campo de entrada quando um usuário carrega uma página
[ x ] é o caso da página inicial do Google
[ x ] passo 1: criar um campo de entrada de texto
[ x ] passo 2: a um arquivo ref
[] API de opções ou a API de composição usam a mesma declaração
[] especifique um atributo ref passando um ID de referência exclusivo como uma string

































<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  <div>
    <input type="text" placeholder="Atualize seu email" ref="inputText" />
    <button @click="letValor()">Confirmar</button>
  </div>

  </div>
</template>

<script>
export default {
  data (){ 
    return{
    question:'adm@gmail.com',
    emailAtual:'',
    novoEmail:''
  } 
  },
  name:'TemplateRefs',
  props:{
    msg:String
  },
  mounted(){
    this.$refs.inputText.focus()
  },
  watch: {
    question(newQuestion, oldQuestion) {
        console.log(oldQuestion,newQuestion)
    }
    },
    methods:{
       letValor(){
        this.question = this.$refs.inputText.value
        }
    }
}
</script>


API de Opções (Options API)

[] acesso a refs usando o objeto this
[] referências de template: propriedade this.$refs
[] refs são acessíveis caso componente ter sido renderizado na tela
[] qualquer ponto do ciclo de vida do Vue antes da montagem não tem acesso aos templates refs
[] primeiro acesso ao template refs é dentro do mounted
[] ouça o lifecycle hook (mounted) e acesseo ref

API de Composição  (Composition API)

[] mescla o conceito de dados reativos via ref com o conceito de template refs
[] crie uma ref com o mesmo nome do atributo ref em seu template
[] ref tem um valor padrão de null que é o valor da entrada quando o componente é montado
[] para aplicar o foco use o lifecycle hook onMounted para renderizar o componente
[] trabalhando na API de composição,importe esse gancho e use dentro da função setup


<!--<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  <div>
    <input type="text" placeholder="Comece a escrever..." ref="input" />
  </div>

  </div>
</template>
-->

<!--<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <ul>
    <li
      v-for="(name, i) in names"
      :key="name"
      :ref="(el) => (elements[i] = el)"
    >
      {{ name }}
    </li>
  </ul>
  <div>
    <input type="text" placeholder="Comece a escrever..."  ref="input" />
    <p>{{c}}</p>
  </div>

  </div>

</template> ->
<script>
//Option API
// export default {
//   name: 'TemplateRefs',
//   props: {
//     msg: String
//   },
//     mounted() {
//     this.$refs.input.focus()
//   }
// }

//Composition API
// import { ref,onMounted } from 'vue'
// export default {
//   name: 'TemplateRefs',
//   props:{
//     msg:String
//   },
//   setup() {
//     const input = ref(null)

// onMounted(() => {
//       input.value.focus()
//     })

//     return {
//       input,
//     }
//   }
// }
<template>
  <h2>Notes:</h2>
  <textarea v-model="notes" />
</template>




<script lang="ts">
import { watchEffect, ref, defineComponent } from "vue";
import { save } from "./api";

export default defineComponent({
  setup() {
    const notes = ref("");

    watchEffect(() => save(notes.value));

    return {
      notes,
    };
  },
});
</script>
// export default {
//   setup() {
//     const names = ref(['Matt', 'John', 'Jane'])
//     const elements = ref([])
//     onMounted(() => {
//       console.log(elements.value) // [li, li ,li]
//     })
//     return {
//       names,
//       elements,
//     }
//   },
// }

// export default {
//  name: 'TemplateRefs',
//   props:{
//     msg:String
//   },
//   setup() {
//          const input = ref(null)
//          const names = ref(['Matt', 'John', 'Jane'])
//          const elements = ref([])
//          let c = ''
//      onMounted(() => {
//        console.log(elements.value) // [li, li ,li]
//      })
//     watchEffect(
//       () => {
//         console.log(input.value.value) // => input
//         input.value.focus()
//       },
//       {
//         flush: 'post',
//       }
//     ),
//     watchPostEffect( () => {
//       c = input.value
//       console.log(c)
// })
//     return {
//       input,
//       names,
//       elements,
//       c
//     }
//   },
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<template>
  <h2>Notes:</h2>
  <textarea v-model="notes" />
</template>

<script lang="ts">
import { watchEffect, ref, defineComponent } from "vue";
import { save } from "./api";

export default defineComponent({
  setup() {
    const notes = ref("");

    watchEffect(() => save(notes.value));

    return {
      notes,
    };
  },
});
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
