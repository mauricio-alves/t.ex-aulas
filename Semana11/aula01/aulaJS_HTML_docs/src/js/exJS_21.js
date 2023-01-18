console.log("testando");

let bgImages = [
  "/images/produtos/noodles-7390775_1920.jpg",
  "/images/produtos/beef-g66eb2a540_1920.jpg",
  "/images/produtos/rice-noodles-855077_1920.jpg",
  "/images/produtos/spare-ribs-7410906_1920.jpg",
  "/images/produtos/sushi-354628_1920.jpg",
  "/images/produtos/salad-374173_1920.jpg",
];

const sorteio = parseInt(Math.random() * bgImages.length);

console.log(sorteio);

document.querySelector(
  "#banner"
).style.backgroundImage = `url(${bgImages[sorteio]})`;
