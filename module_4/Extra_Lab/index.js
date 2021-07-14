const operatorInput = document.querySelector("#operator");

const addButton = document.querySelector("#add");
const subtracionButton = document.querySelector("#subtracion");
const multiplicationButton = document.querySelector("#multiplication");
const divisionButton = document.querySelector("#division");
const resultButton = document.querySelector("#result_operation");

const calculation = {
  operator: NaN,
  operation: null,
  result: null,
};

operatorInput.addEventListener("change", (ev) => {
  calculation.operator = parseInt(ev.target.value);
});

// Reset Actions

const resetInput = () => {
  operatorInput.value = "";
  calculation.operator = NaN;
};

const resetCalculation = () => {
  calculation.operator = NaN;
  calculation.operation = null;
  calculation.result = null;
};

// Get result

function getResult(action) {
  if (!calculation.result) {
    calculation.result = calculation.operator;
    resetInput();
  } else {
    calculation.result = action(calculation.result, calculation.operator);
    resetInput();
  }

  return calculation.result;
}

// Operation

const add = (operator1, operator2) => operator1 + operator2;
const subtracion = (operator1, operator2) => operator1 - operator2;
const multiplication = (operator1, operator2) => operator1 * operator2;
const division = (operator1, operator2) => operator1 / operator2;

function handleClick(action) {
  if (!calculation.operator) {
    return;
  }

  getResult(calculation.operation);
  calculation.operation = action;
}

addButton.addEventListener("click", () => {
  handleClick(add);
});
subtracionButton.addEventListener("click", () => {
  handleClick(subtracion);
});
multiplicationButton.addEventListener("click", () => {
  handleClick(multiplication);
});
divisionButton.addEventListener("click", () => {
  handleClick(division);
});

function handleClickResult() {
  if (calculation.operator) {
    getResult(calculation.operation);
  }

  if (!calculation.result) {
    alert("NO SE QUE HACER");
    return;
  }

  const result = (document.querySelector("#result").innerHTML =
    calculation.result);

  resetCalculation();

  return result;
}

resultButton.addEventListener("click", () => {
  handleClickResult();
});
