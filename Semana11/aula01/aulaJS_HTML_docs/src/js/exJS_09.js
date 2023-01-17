console.log("09");

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
  item4: {
    imagem: "salmon-g0bb6a9f46_1920.jpg",
    nome: "Salmão Grelhado",
    preco: 781,
    quantidade: 1,
    total: 0,
  },
  criaImagem: function (url, nome, obj) {
    let imagem = new Image();
    imagem.src = url;
    imagem.setAttribute("class", "w-100");
    imagem.alt = nome;
    obj.appendChild(imagem);
  },
  criaInputNumber: function (obj, key, i) {
    let inputNumber = document.createElement("input");
    inputNumber.type = "number";
    inputNumber.setAttribute("class", "w-50 border-0 bg-light");
    inputNumber.min = "0";
    inputNumber.max = "10";
    inputNumber.value = "1";
    obj.appendChild(inputNumber);

    inputNumber.onchange = function () {
      let total = carrinho[key].preco * this.value;
      document.querySelector(
        `.item-carrinho-${i} .item-total`
      ).innerText = `R$ ${total.toFixed(2)}`;
    };
  },
  criaSpan: function (key, otherkey, obj) {
    let span = document.createElement("span");
    span.innerText = carrinho[key][otherkey];
    obj.appendChild(span);
  },
};

// preenchendo os campos dinamicamente (for dentro de outro for)
Object.keys(carrinho).forEach((key, i) => {
  let divItem = document.createElement("div");
  divItem.setAttribute("class", `item-carrinho-${i} row col-sm-12`);

  Object.keys(carrinho[key]).forEach((otherkey, j) => {
    let item = document.createElement("div");
    item.setAttribute("class", `col item-${otherkey}`);
    j === 0
      ? carrinho["criaImagem"](
          `/images/produtos/${carrinho[key].imagem}`,
          carrinho[key].nome,
          item
        )
      : j === 3
      ? carrinho["criaInputNumber"](item, key, i)
      : carrinho["criaSpan"](key, otherkey, item);

    divItem.appendChild(item);
  });

  document.querySelector("#itens-carrinho").appendChild(divItem);
});
