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

function turno() {
  t1Txt.value = `${t1}hrs`;
  document.querySelector(
    "#info1-00 span:nth-of-type(1)"
  ).innerText = `${t1}hrs`;
  t2Txt.value = `${t2}hrs`;
  document.querySelector(
    "#info1-01 span:nth-of-type(1)"
  ).innerText = `${t2}hrs`;
}
turno();

document.querySelector("#btnConfTurno").addEventListener("click", function () {
  t1 = t1 + t2; // 12
  t2 = t1 - t2; // 8
  t1 = t1 - t2; // 4
  turno();
});

st1Txt.value = "Atendimento/Caixa";
document.querySelector("#info1-00 span:nth-of-type(2)").innerText =
  st1Txt.value;
st2Txt.value = "Entrega";
document.querySelector("#info1-01 span:nth-of-type(2)").innerText =
  st2Txt.value;

document.querySelector("#btnConfSetor").addEventListener("click", function () {
  temp = st1Txt.value;
  st1Txt.value = st2Txt.value;
  document.querySelector("#info1-00 span:nth-of-type(2)").innerText =
    st1Txt.value;
  st2Txt.value = temp;
  document.querySelector("#info1-01 span:nth-of-type(2)").innerText =
    st2Txt.value;
});

let anterior = 0;

document.querySelectorAll("input[type=radio]").forEach((el, i) => {
  el.onclick = function () {
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
