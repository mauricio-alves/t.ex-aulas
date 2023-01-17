console.log("ex14");

let a = "232423425";
let n = 4;
let email = "usuario_thebest@gmail.com";

console.log(a.padStart(a.length + 2, "0"));
console.log(a.padEnd(a.length + 2, "0"));
console.log(n.toString().length === 1 ? (n = `0${n}`) : (n = n));
console.log(n.toString().length === 1 ? n.padStart(2, "0") : (n = n));

let ultimosDigitos = a.slice(-4);
let mascara = ultimosDigitos.padStart(a.length, "*");
console.log("ultimosDigitos", ultimosDigitos);
console.log("mascara", mascara);

document.querySelector(
  ".p1"
).innerHTML = `Número do cartão: ${a} <br /> Cartão com máscara: ${mascara}.`;

let antes = email.substring(0, email.indexOf("@"));
console.log("antes=", antes);

let depois = email.substring(email.indexOf("@"), email.length);
console.log("depois=", depois);

let primeirasLetras = antes.slice(antes.length / 2);
console.log("primeirasLetras=", primeirasLetras);

let antesMask = primeirasLetras.padStart(antes.length, "+");
console.log("antesMask=", antesMask);

console.log("email criptografado=", `${antesMask}${depois}`);

document.querySelector(
  ".p2"
).innerHTML = `Email: ${email} <br /> E-mail com máscara: ${antesMask}${depois}`;

// MATH
let number = 13.45;

console.log("raiz quadrada de 16=", Math.sqrt(16));

let paraBaixo = Math.floor(number);
console.log("paraBaixo=", paraBaixo);

let paraCima = Math.ceil(number);
console.log("paraCima=", paraCima);

let arredonda = Math.round(number);
console.log("arredonda=", arredonda);

// método to.String(number) adiciona letras ao number random
let random1 = Math.random().toString(36);
console.log("random1=", random1);

// com o método substring(2, 9) ele retorna apenas 7 dígitos
let random2 = Math.random().toString(36).substring(2, 9);
console.log("random2=", random2);

document.querySelector(".p3").innerHTML = `O código é: <b>${random1}.</b>`;
