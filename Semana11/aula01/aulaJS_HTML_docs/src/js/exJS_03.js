console.log("testando js file");

const btnConfirma = document.querySelector("#btnConfirma");
const nomeVisitante = document.querySelector("#nomeVisitante");
const mensagem = document.querySelector("#mensagem");

btnConfirma.onclick = function () {
  mensagem.style.display = "block";
  mensagem.textContent = `Hello, ${nomeVisitante.value}, welcome!`;
};
