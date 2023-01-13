console.log("07");

let carrinho = {
  item1: {
    imagem: "salad-gf22844a91_1920.jpg",
    nome: "Salada Mix",
    preco: 12,
    quantidade: 10,
  },
  item2: {
    imagem: "beef-g66eb2a540_1920.jpg",
    nome: "Carne Grelhada",
    preco: 25,
    quantidade: 10,
  },
  item3: {
    imagem: "breakfast-ga9b591474_1920.jpg",
    nome: "Ovos com Bacon",
    preco: 31,
    quantidade: 10,
  },
};

// Percorrendo o Objeto
// exemplo usando for
for (const key of Object.keys(carrinho)) {
  console.log(key);
  console.log(carrinho[key].nome);
}

let total = 0;

// exemplo usando for each
Object.keys(carrinho).forEach((key) => {
  total = total + carrinho[key].preco;
  console.log(total);
  console.log(key);
  console.log(carrinho[key].nome);
});

// preenchendo os campos
Object.keys(carrinho).forEach((key, i) => {
  document.querySelector(`.item-carrinho-${i} .item-nome span`).innerText =
    carrinho[key].nome;
  document.querySelector(
    `.item-carrinho-${i} .item-imagem`
  ).innerHTML = `<img src='images/produtos/${carrinho[key].imagem}' alt='Salada Mix'class='w-100' />`;
  document.querySelector(
    `.item-carrinho-${i} .item-preco span`
  ).innerText = `R$ ${carrinho[key].preco.toFixed(2)}`;
  document.querySelector(
    `.item-carrinho-${i} .item-total span`
  ).innerText = `R$ ${carrinho[key].preco.toFixed(2)}`;
});

// criando elementos HTML
let p = document.createElement("p");
p.innerText = "Nossos alimentos passam por uma rigorosa análise de qualidade.";
document.querySelector("#mensagem").appendChild(p);
