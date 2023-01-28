import { createStore } from "vuex";

export default createStore({
  // Exemplo de uso de Vuex ao invés de Props para tratar dados
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
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
