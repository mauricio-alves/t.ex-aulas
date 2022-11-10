let sortedNumbers = [2, 1, 2];
let previousSorts = [];
let correctResults = [];
let counter = 0;
let tries = 0;
let random;

function sort() {
  for (let i = 0; i <= sortedNumbers.length - 1; i++) {
    random = parseInt(Math.random() * 3 + 1);
    sortedNumbers[i] = random;
    previousSorts[tries] = [...sortedNumbers];
    console.log("Números Sorteados:", sortedNumbers);
    console.log("Último Sorteio:", previousSorts);
    tries++;

    if (
      (sortedNumbers[0] === sortedNumbers[1] &&
        sortedNumbers[0] === sortedNumbers[2] &&
        counter < 3) ||
      (previousSorts.length > 1 &&
        previousSorts[previousSorts.length - 2].toString() ===
          sortedNumbers.toString() &&
        counter < 3)
    ) {
      console.log(`Porta ${counter + 1}: aberta!`);
      correctResults[counter] = [...sortedNumbers];
      counter++;
    }
    console.log("Tente de novo!");
  }
}

for (let i = 0; i < 30; i++) {
  if (tries > 11) {
    console.log("Fim de jogo, você perdeu!");
    console.log("Tentativas:", tries);
    return;
  }

  if (counter === 3) {
    console.log("Fim de jogo, você venceu!");
    console.log("Resultados corretos:", correctResults);
    console.log("Tentativas:", tries);
    return;
  }

  sort();
}
