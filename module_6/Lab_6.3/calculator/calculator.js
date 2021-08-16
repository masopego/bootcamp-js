const calculateButton = document.querySelector("#calculate");
const priceInput = document.querySelector("#price");
const amountInput = document.querySelector("#amount");

const money = [
  { value: 200, amount: 100 },
  { value: 100, amount: 100 },
  { value: 50, amount: 100 },
  { value: 20, amount: 100 },
  { value: 10, amount: 100 },
  { value: 5, amount: 0 },
  { value: 2, amount: 100 },
  { value: 1, amount: 100 },
  { value: 0.5, amount: 100 },
  { value: 0.2, amount: 100 },
  { value: 0.1, amount: 100 },
  { value: 0.05, amount: 100 },
  { value: 0.02, amount: 100 },
  { value: 0.01, amount: 100 },
];

const refund = (price, amount) => {
  let amountToRefund = amount - price;

  if (amountToRefund <= 0) {
    throw new Error("Not refund available");
  }
  let count = 0;
  let moneyToRefund = {};
  while (amountToRefund != 0) {
    let value = money[count].value;
    let result = amountToRefund / value;
    let numberOfMoneyToRefund = Math.floor(result);

    if (numberOfMoneyToRefund >= 1) {
      moneyToRefund[value] =
        money[count].amount >= numberOfMoneyToRefund
          ? numberOfMoneyToRefund
          : money[count].amount;

      amountToRefund = amountToRefund - value * moneyToRefund[value];
    }

    count++;
  }
  return moneyToRefund;
};

calculateButton.addEventListener("click", () => {
  const price = parseFloat(priceInput.value);
  const amount = parseFloat(amountInput.value);
  console.log(refund(price, amount));
});
