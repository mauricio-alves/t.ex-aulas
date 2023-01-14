// console.log("testando");

import { msg02, msgAula, trocaTurno, trocaSetor } from "./module/module.js";

// console.log(msg02);
// console.log(msgAula("JavaScript"));

let t1,
  t2,
  st1,
  st2,
  t1Txt,
  t2Txt,
  st1Txt,
  st2Txt,
  btnConfTurno,
  btnConfSetor,
  btnConfTipoTurno,
  tipo1Txt,
  tipo2Txt,
  temp,
  turno0,
  turno1,
  setor0,
  setor1,
  revezamento0,
  revezamento1;

t1 = 8;
t2 = 4;

t1Txt = document.querySelector("#func01-turno");
t2Txt = document.querySelector("#func02-turno");
st1Txt = document.querySelector("#func01-setor");
st2Txt = document.querySelector("#func02-setor");
tipo1Txt = document.querySelector("#func01-extra");
tipo2Txt = document.querySelector("#func02-extra");

turno0 = document.querySelector("#info1-00 span:nth-of-type(1)");
turno1 = document.querySelector("#info1-01 span:nth-of-type(1)");

setor0 = document.querySelector("#info1-00 span:nth-of-type(2)");
setor1 = document.querySelector("#info1-01 span:nth-of-type(2)");

revezamento0 = document.querySelector("#info1-00 span:nth-of-type(3)");
revezamento1 = document.querySelector("#info1-01 span:nth-of-type(3)");

trocaTurno(t1Txt, t2Txt, turno0, turno1);

document.querySelector("#btnConfTurno").addEventListener("click", function () {
  trocaTurno(t1Txt, t2Txt, turno0, turno1);
});

trocaSetor(st1Txt, st2Txt, setor0, setor1);

document.querySelector("#btnConfSetor").addEventListener("click", function () {
  trocaSetor(st1Txt, st2Txt, setor0, setor1);
});

document
  .querySelector("#btnConfTipoTurno")
  .addEventListener("click", function () {
    temp = tipo1Txt.value;
    tipo1Txt.value = tipo2Txt.value;
    revezamento0.innerText = tipo1Txt.value;
    tipo2Txt.value = temp;
    revezamento1.innerText = tipo2Txt.value;
  });

let anterior = 0;

document.querySelectorAll("input[type=radio]").forEach((el, i) => {
  el.onclick = function () {
    i === 0 ? (anterior = 1) : null;
    if (el.checked) {
      document
        .querySelector(`.dupla:nth-of-type(${i + 1})`)
        .classList.remove("bg-light");
    }
    document
      .querySelector(`.dupla:nth-of-type(${anterior + 1})`)
      .classList.add("bg-light");
    anterior = i;
  };
});
