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

// PROMISE
function f_login(resolve, reject) {
  if (nomeVisitante.value === "") {
    reject(alert("Preencha o campo"));
  } else {
    resolve(
      (mensagem.style.display = "block"),
      (mensagem.textContent = `Oi ${nomeVisitante.value}, seja bem vindo!`),
      localStorage.setItem("user", nomeVisitante.value),
      (document.querySelector(".user").innerText =
        localStorage.getItem("user")),
      document.querySelector(".sair").classList.remove("hide")
    );
  }
}

btnConfirma.onclick = function () {
  const login = new Promise(f_login);
  login
    .then((result) => {
      result;
    })
    .catch((erro) => {
      erro;
    });
};

function info_1() {
  console.log("Atenção, verifique sua conta.");
}

function info_2() {
  console.log("Atenção, hora de trocar a senha!");
}
function info_3() {
  console.log("Atenção, você ganhou 100 pontos.");
}

// UMA MANEIRA DE USAR PROMISE
Promise.resolve().then(() => {
  console.log(2), info_1();
});

// OUTRA MANEIRA DE USAR PROMISE
[info_1, info_2, info_3].reduce(
  (a, b, c) => a.then(b).then(c),
  Promise.resolve()
);

// OUTRA MANEIRA DE USAR PROMISE
const aguarde = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
aguarde(5000).then(() => info_3());
