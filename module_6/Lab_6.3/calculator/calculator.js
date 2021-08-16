const calculateButton = document.querySelector("#calculate");
const priceInput = document.querySelector("#price");
const amountInput = document.querySelector("#amount");

const money = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

const refund = (price, amount) => {
  let amountToRefund = amount - price;

  if (amountToRefund <= 0) {
    throw new Error("Not refund available");
  }
  let count = 0;
  let moneyToRefund = {};
  while (amountToRefund != 0) {
    let result = amountToRefund / money[count];
    let numberOfMoneyToRefund = Math.floor(result);

    if (numberOfMoneyToRefund >= 1) {
      moneyToRefund[money[count]] = numberOfMoneyToRefund;
    }
    amountToRefund = amountToRefund - money[count] * numberOfMoneyToRefund;
    count++;
  }
  return moneyToRefund;
};

calculateButton.addEventListener("click", () => {
  const price = parseFloat(priceInput.value);
  const amount = parseFloat(amountInput.value);
  console.log(refund(price, amount));
});
