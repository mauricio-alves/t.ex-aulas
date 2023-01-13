console.log("testando");

let carrinho = {
  item1: {
    nome: "Salada Mix",
    preco: 12,
  },
  item2: {
    nome: "Carne Grelhada",
    preco: 25,
  },
  item3: {
    nome: "Ovos com Bacon",
    preco: 31,
  },
};

document.querySelector(".item-nome span").innerText = carrinho["item1"].nome;
document.querySelector(".item-preco span").innerText = `R$ ${carrinho[
  "item1"
].preco.toFixed(2)}`;
document.querySelector(
  ".item-imagem"
).innerHTML = `<img src='images/produtos/salad-374173_1920.jpg' alt='Salada Mix'class='w-100' />`;

// ALTERNATIVA 1
let inputNumber = document.querySelector(".input-item-qtd");

inputNumber.addEventListener("change", () => {
  let total = carrinho["item1"].preco * inputNumber.value;
  document.querySelector(".item-total span").innerText = `R$ ${total.toFixed(
    2
  )}`;
});

// ALTERNATIVA 2 - USANDO VAR E THIS
// var se refere a escopo global, aí o this funciona
var inputNumber = document.querySelector(".input-item-qtd");

inputNumber.addEventListener("change", () => {
  let total = carrinho["item1"].preco * this.inputNumber.value;
  document.querySelector(".item-total span").innerText = `R$ ${total.toFixed(
    2
  )}`;
});

// ALTERNATIVA 3 - USANDO EVENT
let inputNumber = document.querySelector(".input-item-qtd");

inputNumber.addEventListener("change", (event) => {
  let total = carrinho["item1"].preco * event.target.value;
  document.querySelector(".item-total span").innerText = `R$ ${total.toFixed(
    2
  )}`;
});

// ALTERNATIVA 4 - USANDO FUNÇÃO ONCHANGE E ARROW FUNCTION
// no onchange pode-se usar tanto arrow function quanto função anônima
let inputNumber = document.querySelector(".input-item-qtd");

inputNumber.onchange = (e) => {
  let total = carrinho["item1"].preco * e.target.value;
  document.querySelector(".item-total span").innerText = `R$ ${total.toFixed(
    2
  )}`;
};

// ALTERNATIVA 5 - USANDO FUNÇÃO ONCHANGE E FUNÇÃO ANÔNIMA
// let se refere a escopo local, porém ao usar onchange o this funcionaria aqui também
let inputNumber = document.querySelector(".input-item-qtd");

inputNumber.onchange = function () {
  let total = carrinho["item1"].preco * this.value;
  document.querySelector(".item-total span").innerText = `R$ ${total.toFixed(
    2
  )}`;
};
