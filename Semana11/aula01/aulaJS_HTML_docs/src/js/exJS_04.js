console.log("testando");

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
  temp;

t1 = 8;
t2 = 4;

t1Txt = document.querySelector("#func01-turno");
t2Txt = document.querySelector("#func02-turno");
st1Txt = document.querySelector("#func01-setor");
st2Txt = document.querySelector("#func02-setor");

t1Txt.value = `${t1}hrs`;
t2Txt.value = `${t2}hrs`;

document.querySelector("#btnConfTurno").addEventListener("click", function () {
  t1 = t1 + t2; // 12
  t2 = t1 - t2; // 8
  t1 = t1 - t2; // 4
  t1Txt.value = `${t1}hrs`;
  t2Txt.value = `${t2}hrs`;
});

st1Txt.value = "Atendimento";
st2Txt.value = "Entrega";

document.querySelector("#btnConfSetor").addEventListener("click", function () {
  temp = st1Txt.value;
  st1Txt.value = st2Txt.value;
  st2Txt.value = temp;
});
