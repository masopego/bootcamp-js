const randomPick = (num, min, max) => {
  if (min > max) {
    throw new Error("Max number should be greater than min");
  }
  if (max - min + 1 < num) {
    throw new Error("Range should be greater than num");
  }

  const numbers = [];
  while (numbers.length < num) {
    const randomNumber = Math.floor(Math.random() * (max + 1 - min) + min);
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  return numbers;
};

console.log(randomPick(10, 1, 100));
console.log(randomPick(6, 1, 49));
console.log(randomPick(15, 1, 15));
console.log(randomPick(1, 1, 6));
