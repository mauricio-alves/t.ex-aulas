import { createStore } from "vuex";
// Os dados aqui ficam disponíveis em toda a aplicação

export default createStore({
  // Ao executar no modo estrito, evidencia erros que o modo tradicional não mostra
  // exemplo: 'mutations devem ser executadas via actions'
  strict: true,

  // Exemplo de consumo de Vuex ao invés de Props para tratar dados
  state: {
    produtos: {
      pratosQuentes: [
        { nome: "Lazanha", preco: 180 },
        { nome: "Salmão Grelhado", preco: 230 },
        { nome: "Espeto de Vegetais", preco: 90 },
        { nome: "Feijoada Light", preco: 140 },
        { nome: "Penne ao Sugo", preco: 180 },
      ],
      sobremesas: [
        { nome: "Quindim", preco: 35 },
        { nome: "Bomba de Chocolate", preco: 18 },
        { nome: "Petit Gateau", preco: 28 },
        { nome: "Torta Holandesa", preco: 34 },
        { nome: "Pudim de Leite", preco: 23 },
      ],
    },
  },
  // Exemplo de consumo de dados via getters
  getters: {
    loja: (state) => (type) => {
      let loja = state.produtos[type].map((currentProduct) => {
        return {
          nome: currentProduct.nome,
          preco: currentProduct.preco,
        };
      });
      return loja;
    },
  },
  // Exemplo de consumo de dados via mutations (dados que são modificáveis)
  // mutations recebem apenas o estado (dados) por meio do payload
  // portanto, na mutations so há disponíveis o estado (dados) e o payload
  mutations: {
    aplicarDesconto: (state, payload) => {
      state.produtos[payload].forEach((item) => {
        item.preco = (item.preco * 0.9).toFixed(2);
      });
    },
  },
  // Exemplo de consumo de dados via actions
  // actions realiza interações async com APIs e confirma mutations
  actions: {
    aplicarDesconto: (context, payload) => {
      context.commit("aplicarDesconto", payload);
    },
  },
  // Exemplo de consumo de dados via modules
  // actions, mutations e getters podem ficar dentro de modules
  // permitem que vários modules reajam ao mesmo tipo de action/mutation
  // modules são mais independentes e reutilizáveis
  modules: {},
});
