console.log("08");

let carrinho = {
  item1: {
    imagem: "salad-gf22844a91_1920.jpg",
    nome: "Salada Mix",
    preco: 12,
    quantidade: 1,
    total: 0,
  },
  item2: {
    imagem: "beef-g66eb2a540_1920.jpg",
    nome: "Carne Grelhada",
    preco: 25,
    quantidade: 1,
    total: 0,
  },
  item3: {
    imagem: "breakfast-ga9b591474_1920.jpg",
    nome: "Ovos com Bacon",
    preco: 31,
    quantidade: 1,
    total: 0,
  },
};

// preenchendo os campos dinamicamente (for dentro de outro for)
Object.keys(carrinho).forEach((key, i) => {
  let divItem = document.createElement("div");
  divItem.setAttribute("class", `item-carrinho-${i} row col-sm-12`);

  Object.keys(carrinho[key]).forEach((otherkey, j) => {
    let item = document.createElement("div");
    item.setAttribute("class", `col item-${otherkey}`);
    item.innerText = carrinho[key][otherkey];
    divItem.appendChild(item);
  });
  document.querySelector("#itens-carrinho").appendChild(divItem);
});
