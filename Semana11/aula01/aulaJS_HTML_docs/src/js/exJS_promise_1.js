console.log("testando");

const btnConfirma = document.querySelector("#btnConfirma");
const nomeVisitante = document.querySelector("#nomeVisitante");
const mensagem = document.querySelector("#mensagem");
const sair = document.querySelector(".sair");
const txt = document.querySelector("#comentario");

function verificaUser() {
  document.querySelector(".user").innerText = localStorage.getItem("user");
  document.querySelector("#box02").classList.remove("hide");
  document.querySelector("#box01").classList.add("hide");
  document.querySelector("#box02 p").innerText = `Oi ${localStorage.getItem(
    "user"
  )}, seja bem vindo!`;
}

localStorage.user ? verificaUser() : null;

btnConfirma.onclick = function () {
  mensagem.style.display = "block";
  mensagem.textContent = `Oi ${nomeVisitante.value}, seja bem vindo!`;
  localStorage.setItem("user", nomeVisitante.value);
  document.querySelector(".user").innerText = localStorage.getItem("user");
  document.querySelector(".sair").classList.remove("hide");
};

sair.onclick = function () {
  document.querySelector("#box02").classList.add("hide");
  document.querySelector("#box01").classList.remove("hide");
  document.querySelector(".user").innerText = "";
  document.querySelector(".sair").classList.add("hide");

  localStorage.removeItem("user");
};

function comentario() {
  sessionStorage.setItem("salvarTxt", txt.value);
}

sessionStorage.getItem("salvarTxt")
  ? (txt.value = sessionStorage.getItem("salvarTxt"))
  : null;

txt.addEventListener("keyup", comentario);

// PROMISES
let info = true;
function principal(resolve, reject) {
  info === true
    ? resolve(
        "deu certo",
        (document.querySelector("#titulo01").innerText = "Aula 17 de JS")
      )
    : reject("deu ruim");

  // try {
  //   resolve("deu certo");
  // } catch (error) {
  //   reject("deu ruim");
  // }
}
const minhaPromise = new Promise(principal);
console.log(minhaPromise);

minhaPromise
  .then((m) => {
    console.log("deu certo");
  })
  .catch((erro) => {
    console.log("deu ruim");
  });
