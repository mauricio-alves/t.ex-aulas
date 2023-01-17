console.log("testando");

function texto(resolve, reject) {
  let req = new XMLHttpRequest();
  req.open("GET", "src/files/arquivo1.txt");
  req.onload = function (params) {
    req.status === 200
      ? resolve((document.querySelector(".conteudo").innerHTML = req.response))
      : reject("Algo deu errado");
  };
  req.send();
}

const carregaTxt = new Promise(texto);

carregaTxt
  .then((result) => {
    result;
  })
  .catch((error) => {
    console.log(error);
  });

// ASYNC AWAIT
async function saudacao() {
  const msg = await "Olá, tudo bem?";
  return msg;
}

saudacao().then((result) => console.log(result));

// OUTRO EXEMPLO
async function despedida(message) {
  const response = await message;
  return response;
}

despedida("Estou indo").then((result) => {
  console.log(result);
});

// OUTRO EXEMPLO
function carregaEmCincoSegundos(param) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(param);
    }, 5000);
  });
}

async function verificaCarregamento() {
  const response = await carregaEmCincoSegundos("Arquivo ok!");
  console.log(response);
}

verificaCarregamento();
