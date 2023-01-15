const msg02 = "Seja Bem Vindo";

function msgAula(aula) {
  return `Hoje a aula é sobre ${aula}.`;
}

let t1 = 8;
let t2 = 4;
let temp;
let extra1 = "Semana com exceção de feriados.";
let extra2 = "Finais de semana e feriados.";

function trocaTurno(t1Txt, t2Txt, turno0, turno1, flag) {
  t1 = t1 + t2; // 12
  t2 = t1 - t2; // 8
  t1 = t1 - t2; // 4
  t1Txt.value = `${t1}hrs`;
  t2Txt.value = `${t2}hrs`;
  if (flag) {
    turno0.innerText = `${t1}hrs`;
    turno1.innerText = `${t2}hrs`;
  }
}

function trocaSetor(st1Txt, st2Txt, setor0, setor1) {
  st1Txt.value === st2Txt.value && st1Txt.value !== "" && st2Txt.value !== ""
    ? alert("Escolha setores diferentes")
    : (setor0.innerText = st1Txt.value);
  setor1.innerText = st2Txt.value;
}

function revezaTurno(tipo1Txt, tipo2Txt, revezamento0, revezamento1) {
  temp = tipo1Txt.value;
  tipo1Txt.value = tipo2Txt.value;
  revezamento0.innerText = tipo1Txt.value;
  tipo2Txt.value = temp;
  revezamento1.innerText = tipo2Txt.value;
}

export { msgAula, msg02, trocaTurno, trocaSetor, revezaTurno, extra1, extra2 };
