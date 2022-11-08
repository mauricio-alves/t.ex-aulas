let numbers = [2, 1, 2];
let results = [];
let counter = 0;
let random;

function sort() {
  for (let i = 0; i <= numbers.length - 1; i++) {
    random = parseInt(Math.random() * 3 + 1);
    numbers[i] = random;

    if (numbers[0] === numbers[1] && numbers[0] === numbers[2]) {
      console.log(`Porta ${numbers[0]}: aberta`);
      console.log("numbers:", numbers);

      if (counter < 3) {
        results[counter] = [...numbers];
        console.log("results:", results);
        counter = counter + 1;
        console.log("counter:", counter);
      }
    } else {
      console.log("Tente de novo!");
    }
  }
}

for (let i = 0; i < 30; i++) {
  if (counter === 3) {
    console.log("Fim de jogo, você venceu!");
    return;
  }
  sort();
}
