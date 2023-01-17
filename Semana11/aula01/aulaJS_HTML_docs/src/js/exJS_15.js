console.log("testando");

const btnConfirma = document.querySelector("#btnConfirma");
const nomeVisitante = document.querySelector("#nomeVisitante");
const mensagem = document.querySelector("#mensagem");
const sair = document.querySelector(".sair");

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
