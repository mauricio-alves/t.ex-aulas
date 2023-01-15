// console.log("testando");

import {
  msg02,
  msgAula,
  trocaTurno,
  trocaSetor,
  revezaTurno,
  extra1,
  extra2,
} from "./module/module.js";

// console.log(msg02);
// console.log(msgAula("JavaScript"));

let t1,
  t2,
  t1Txt,
  t2Txt,
  st1Txt,
  st2Txt,
  tipo1Txt,
  tipo2Txt,
  turno0,
  turno1,
  setor0,
  setor1,
  revezamento0,
  revezamento1,
  anterior,
  ativo,
  listOn;

t1 = 8;
t2 = 4;

anterior = document.querySelector(".dupla-0");
ativo = 0;

let duplas = {
  dupla0: ["Estela Martins", "Adonis Santos"],
  dupla1: ["Cleonildo Amarante", "Pilar Detomasi"],
  dupla2: ["Francis Albieri", "Portella Afonso Silva"],
};

// FORMULÁRIOS
t1Txt = document.querySelector("#func01-turno");
t2Txt = document.querySelector("#func02-turno");
st1Txt = document.querySelector("#func01-setor");
st2Txt = document.querySelector("#func02-setor");
tipo1Txt = document.querySelector("#func01-extra");
tipo2Txt = document.querySelector("#func02-extra");

function infos(ativo) {
  turno0 = document.querySelector(
    `.dupla-${ativo} #info1-00 span:nth-of-type(1)`
  );
  turno1 = document.querySelector(
    `.dupla-${ativo} #info1-01 span:nth-of-type(1)`
  );

  setor0 = document.querySelector(
    `.dupla-${ativo} #info1-00 span:nth-of-type(2)`
  );
  setor1 = document.querySelector(
    `.dupla-${ativo} #info1-01 span:nth-of-type(2)`
  );

  revezamento0 = document.querySelector(
    `.dupla-${ativo} #info1-00 span:nth-of-type(3)`
  );
  revezamento1 = document.querySelector(
    `.dupla-${ativo} #info1-01 span:nth-of-type(3)`
  );
}
infos(ativo);

trocaTurno(t1Txt, t2Txt, turno0, turno1, false);

document.querySelector("#btnConfTurno").addEventListener("click", function () {
  infos(ativo);
  trocaTurno(t1Txt, t2Txt, turno0, turno1, true);
});

trocaSetor(st1Txt, st2Txt, setor0, setor1);

document.querySelector("#btnConfSetor").addEventListener("click", function () {
  infos(ativo);
  trocaSetor(st1Txt, st2Txt, setor0, setor1);
});

tipo1Txt.value = extra1;
tipo2Txt.value = extra2;

document
  .querySelector("#btnConfTipoTurno")
  .addEventListener("click", function () {
    infos(ativo);
    revezaTurno(tipo1Txt, tipo2Txt, revezamento0, revezamento1);
  });

listOn = ["border", "border-4", "border-warning"];

document.querySelector(".dupla-0").classList.remove("bg-light");
document.querySelector(".dupla-0").classList.add(...listOn);

document.querySelectorAll("input[type=radio]").forEach((el, i) => {
  el.onchange = function () {
    document.querySelector(`.dupla-${i}`).classList.remove("bg-light");
    document.querySelector(`.dupla-${i}`).classList.add(...listOn);
    anterior.classList.add("bg-light");
    anterior.classList.remove(...listOn);

    anterior = document.querySelector(`.dupla-${i}`);
    ativo = i;

    document.querySelector("label[for=func-01").innerText =
      duplas[`dupla${i}`][0];
    document.querySelector("label[for=func-02").innerText =
      duplas[`dupla${i}`][1];
  };
});
