let numbers = [2, 1, 2];
let sort = [];
let counter = 0;
let random;

function sorteio() {
  for (let i = 0; i <= numbers.length - 1; i++) {
    random = parseInt(Math.random() * 3 + 1);
    numbers[i] = random;

    if (numbers[0] === numbers[1] && numbers[0] === numbers[2]) {
      if (counter === 3) {
        console.log("sort=", sort);
        console.log("Fim de jogo, você venceu!");
        return;
      }

      if (counter < 3) {
        console.log(`Porta ${numbers[0]}: aberta`);
        console.log("numbers:", numbers);
        counter = counter + 1;
        console.log("counter:", counter);
        sort.push(numbers);
        console.log("Tente de novo!");
      }
    }
  }
  return sort;
}

for (let i = 0; i < 30; i++) {
  sorteio();
}
