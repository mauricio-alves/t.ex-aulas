// FORMAS DE MANIPULAR DATA
let n = new Date("December 22, 1980 03:04:55");
let x = new Date("1980-11-17 05:12:32");
let y = new Date("1980,12,14");
let z = new Date("1980-12-14");
let tempo = new Date();

console.log("n=", n);
console.log("x=", x);
console.log("y=", y);
console.log("z=", z);
console.log("tempo=", tempo);
console.log("tempo.getTime()=", tempo.getTime());

let meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
let semana = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

function dataDeHoje() {
  let hoje = new Date();
  let diaDaSemana = hoje.getDay();
  let diaDoMes = hoje.getDate().toString();
  diaDoMes = diaDoMes.length === 1 ? `0${diaDoMes}` : diaDoMes;
  let mesDoAno = hoje.getMonth().toString() + 1; // + 1 pq meses vai de 0 a 11
  mesDoAno = mesDoAno.length === 1 ? `0${mesDoAno}` : mesDoAno;
  let anoAtual = hoje.getFullYear();
  let dataAtual = `${diaDoMes}/${mesDoAno}/${anoAtual}`;
  return dataAtual;
}

console.log(dataDeHoje());

function dataDeHojeComNomes() {
  let hoje = new Date();
  let diaDaSemana = hoje.getDay();
  let diaDoMes = hoje.getDate().toString();
  diaDoMes = diaDoMes.length === 1 ? `0${diaDoMes}` : diaDoMes;
  let mesDoAno = hoje.getMonth().toString();
  let anoAtual = hoje.getFullYear();
  let dataAtual = `Vitória da Conquista, ${semana[diaDaSemana]}, ${diaDoMes} de ${meses[mesDoAno]} de ${anoAtual}.`;
  return dataAtual;
}

console.log(dataDeHojeComNomes());

document.querySelector(".p1").innerText = dataDeHoje();
document.querySelector(".p2").innerText = dataDeHojeComNomes();

function inicio() {
  let tempo = new Date();
  let inicio = tempo.getTime();
  return inicio;
}

let tempoInicial = inicio();

document.querySelector("#btnFim").addEventListener("click", () => {
  let fim = Date.now();
  let tempoDecorrido = (fim - tempoInicial) / 1000;
  document.querySelector(".p3").innerText = `${tempoDecorrido} segundos`;
});
