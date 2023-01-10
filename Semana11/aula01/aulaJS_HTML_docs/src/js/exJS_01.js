console.log("Testando Js file");

let nivel = 0;
let statusContrato = "";
let n = 0;

switch (nivel) {
  case 1:
    statusContrato = "Estagiário";
    break;
  case 2:
    n = 12;
    statusContrato = "Efetivado";
    break;
  default:
    statusContrato = "Em contratação";
    break;
}

console.log(statusContrato);
console.log(n);

let i = 0;
let y = 0;

while (i < 5) {
  i++;

  if (i === 3) continue;
  y += i;
  console.log(`${y}\n\++++`);
}
