console.log("Testando JS file");

let titulo01 = document.getElementById("titulo01");
let titulo01_a = document.getElementsByClassName("titulo");
let titulo01_b = document.querySelector("h2");
let titulo01_c = document.querySelectorAll("h2");

console.log(titulo01);
console.log(titulo01_a);
console.log(titulo01_b);
console.log(titulo01_c);

titulo01_c[1].innerHTML = "Aula de Lógica! Imprimindo em tela :)";
titulo01_c[0].style = 'color: brown';
