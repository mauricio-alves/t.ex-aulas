let sortedNumbers = [2, 1, 2];
let equalResults = [];
let counter = 0;
let tries = 0;
let random;

function sort() {
  for (let i = 0; i <= sortedNumbers.length - 1; i++) {
    random = parseInt(Math.random() * 3 + 1);
    sortedNumbers[i] = random;
    console.log("Sorted Numbers:", sortedNumbers);
    tries = tries + 1;

    if (
      sortedNumbers[0] === sortedNumbers[1] &&
      sortedNumbers[0] === sortedNumbers[2] &&
      counter < 3
    ) {
      console.log(`Porta ${sortedNumbers[0]}: aberta!`);
      equalResults[counter] = [...sortedNumbers];
      counter = counter + 1;
    } else {
      console.log("Tente de novo!");
    }
  }
}

for (let i = 0; i < 30; i++) {
  if (tries > 11) {
    console.log("Fim de jogo, você perdeu!");
    console.log("tries", tries);
    return;
  }

  if (counter === 3) {
    console.log("Fim de jogo, você venceu!");
    console.log("Equal Results:", equalResults);
    console.log("tries", tries);
    return;
  }

  sort();
}
