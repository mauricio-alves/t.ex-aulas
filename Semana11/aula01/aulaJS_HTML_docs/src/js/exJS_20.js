console.log("20");

let resultado = 0;

let carrinho = {
  item1: {
    imagem: "salad-gf22844a91_1920.jpg",
    nome: "Salada Mix",
    preco: 12,
    quantidade: 0,
    total: 0,
    fechar: "x",
  },
  item2: {
    imagem: "beef-g66eb2a540_1920.jpg",
    nome: "Carne Grelhada",
    preco: 25,
    quantidade: 0,
    total: 0,
    fechar: "x",
  },
  item3: {
    imagem: "breakfast-ga9b591474_1920.jpg",
    nome: "Ovos com Bacon",
    preco: 31,
    quantidade: 0,
    total: 0,
    fechar: "x",
  },
  item4: {
    imagem: "salmon-g0bb6a9f46_1920.jpg",
    nome: "Salmão Grelhado",
    preco: 78,
    quantidade: 0,
    total: 0,
    fechar: "x",
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
    inputNumber.value = "0";
    obj.appendChild(inputNumber);

    inputNumber.onchange = function () {
      let total = carrinho[key].preco * this.value;
      resultado = 0;
      document.querySelector(
        `.item-carrinho-${i} .item-total span`
      ).innerText = `R$ ${total.toFixed(2)}`;
      carrinho["totalCarrinho"]();
    };
  },
  criaSpan: function (key, otherkey, obj) {
    let span = document.createElement("span");
    otherkey === "total"
      ? (span.innerText = `R$ ${carrinho[key][otherkey].toFixed(2)}`)
      : (span.innerText = carrinho[key][otherkey]);
    otherkey === "fechar"
      ? (span.onclick = function () {
          carrinho["deleteItem"](key);
        })
      : null;
    obj.appendChild(span);
  },
  totalCarrinho: function () {
    document.querySelectorAll(".item-total").forEach((n) => {
      let obj = n.querySelector("span").innerText;
      resultado += parseInt(obj.substring(3, obj.length));
      document.querySelector(
        "#totalCarrinho"
      ).innerText = `R$ ${resultado.toFixed(2)}`;
    });
  },
  deleteItem: function (item) {
    delete carrinho[item];
    montaCarrinho();
  },
};

// preenchendo os campos dinamicamente (for dentro de outro for)
function montaCarrinho() {
  const divBox = document.querySelector("#itens-carrinho");
  while (divBox.firstChild) {
    divBox.removeChild(divBox.firstChild);
  }
  Object.keys(carrinho).forEach((key, i) => {
    if (typeof carrinho[key] === "object") {
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
    }
  });
}

montaCarrinho();
