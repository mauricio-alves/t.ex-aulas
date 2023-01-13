console.log("testando 6");

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

// Buscar uma ocorrência dentro de uma string
const msgCarrinho =
  "As opções são acompanhadas de batatas e arroz, com exceção das opções como caldos e sopas.";
// Encontrar a ocorrência 'batatas' (só encontra e substitui a primeira ocorrência)
let acomp01, acomp02, acomp03;
acomp01 = "batatas fritas";
acomp02 = "batatas rusticas";
acomp03 = "batatas soute";

let msg01 = msgCarrinho.replace("batatas", acomp02);

document.querySelector("#msgCarrinho").innerText = msg01;

// Encontrar todas as ocorrências 'opções'
let fraseCarrinho = document.querySelector("#msgCarrinho").innerText;
// regex = g de global e i de ignorar case sensitive
let busca = /opções/gi;

let msg02 = fraseCarrinho.replace(busca, "embalagens");

document.querySelector("#msgCarrinho").innerText = msg02;
