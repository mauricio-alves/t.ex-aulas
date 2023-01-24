Vue devtools

https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd


    <!-- <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    
    <div id="app">{{ message }}</div>
    
    <script>
        const { createApp } = Vue

        createApp({
            data() {
                return {
                    message: 'Hello Vue!'
                }
            }
        }).mount('#app')
    </script> -->

    <!-- <div id="app">{{ message }}</div>
    
    <script type="module">
        import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

        createApp({
            data() {
                return {
                    message: 'Hello Vue!'
                }
            }
        }).mount('#app')
    </script> -->


    <script type="importmap">
      {
        "imports": {
          "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
        }
      }
    </script>
    
    <div id="app">{{ message }}</div>
    
    <script type="module">
        import { createApp } from 'vue'

        createApp({
            data() {
                return {
                    message: 'Hello Vue!'
                }
            }
        }).mount('#app')
    </script>
///////////////////////////

    index.vue.html


       <div id="app">
            <button @click="count++">
                Count is: {{ count }}
            </button>
        </div>
        <script type="module">
            // import { createApp } from 'vue'
            import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
            createApp({
                    data() {
                        return {
                            count: 0
                        }
                    }
                }).mount('#app')
          import MyComponent from './components.js'
          createApp(MyComponent).mount('#app')
        </script>
//////////////////////////////

        components.js


        export default {
  data() {
    return { count: 12 }
  },
  // template: `<div>count is {{ count }}</div>`
  template: `<div id="app">
            <button @click="count++">
                Count is: {{ count }}
            </button>
        </div>`

}


# latest stable
npm install vue@next
sudo npm install -g @vue/cli
vue --version

# update upgrade
sudo apt update
sudo apt -y upgrade

# Instalar curl
sudo snap install curl 
sudo apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates

# Remover o Node js
sudo apt-get remove nodejs
sudo apt-get purge nodejs
sudo apt-get autoremove

# Instalar o Node 14x

curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
## Run `sudo apt-get install -y nodejs` to install Node.js 14.x and npm
## You may also need development tools to build native addons:
     sudo apt-get install gcc g++ make
## To install the Yarn package manager, run:
     curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null
     echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
     sudo apt-get update && sudo apt-get install yarn

# latest stable
npm install vue@next
sudo npm install -g @vue/cli
vue --version

npm run serve
vue create teste

---

 - [x] createApp
 - [x] data return
 - [x] mount
 - [x] template html {{ xxx }}
 - [x] methods
 - [x] módulos - export
 - [x] módulos não necessitam de defer
 - [x] módulos são exexutados uma única vez
 - [x] App js import modules
 

# Vue
## createApp
``` 
<script type="module">
    // const {createApp} = Vue
    import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
    createApp({
        data(){
           return{
            m1:'Bem vindo ao Vue Js!',
            m2:'Bora codar  todos  os dias!'
           } 
        }
    }).mount('#app')

</script>

```
## Template HTML
```
 <div class="w-50 mx-auto mt-4 px-4"id="app">
    <button @click="count++" class="w-25 mx-auto">{{count}}</button>
 </div>

```

```
<button @click="count++ , n='?'" class="w-25 mx-auto my-2">{{count}}</button>

<button v-on:click="multiplicar" class="w-25 mx-auto">{{count}} x 4 = {{n}}</button>
```
## Módulo (calulos.js)
```
export default{
      data(){
           return{
            m1:'Bora codar juntos!',
            m2:'Clica ai denovo! :)',
            count:1,
            n:4
           } 
        },
        methods:{
            multiplicar(){
               this.n = this.count * 4
            }
        }
}
```
## import calculos from app_1.js
```
  // const {createApp} = Vue
    import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

    import calculos from './src/components/calculos.js'
    createApp(calculos).mount('#app2a')
```

## Template HTML
```
 <form id="formUser">
        <input type="text" v-model="inputUser_nome" placeholder="Digite seu nome">
        <input type="submit"v-on:click="inputUser_click" value="Enviar">
      </form>
      <span class="px-5 text-secondary mt-4">Meu nome é : {{nome}}</span>
      <span class="px-5 text-danger">Binding: <strong class="text-dark">{{inputUser_nome}}</strong></span>
```

## Módulo (formUser.js)
```
export default{
    data(){
        return{
             m1:'Bem vindo ao Vue Js!',
             nome:'',
             inputUser_nome:''
        }
    },
    methods:{
        inputUser_click(e){
            e.preventDefault()
            this.nome = this.inputUser_nome
           // console.log(this.inputUser_nome)
        }
    }
} 
```
## import formUser from app_2.js
```
  // const {createApp} = Vue
    import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'


    import formUser from './src/components/formUser.js'
    createApp(formUser).mount('#app3')
```





# latest stable
npm install vue@next
sudo npm install -g @vue/cli
vue --version

vue upgrade --next

npm run serve
vue create seuprojeto