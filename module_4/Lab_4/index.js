const operatorInput1 = document.querySelector("#operator_1");
const operatorInput2 = document.querySelector("#operator_2");

const operators = { first: NaN, second: NaN };

const addButton = document.querySelector("#add");
const subtracionButton = document.querySelector("#subtracion");
const multiplicationButton = document.querySelector("#multiplication");
const divisionButton = document.querySelector("#division");

const onOperatorChange = (op, value) =>
  (operators[op] = parseInt(value) != NaN ? parseInt(value) : NaN);

operatorInput1.addEventListener("change", (e) =>
  onOperatorChange("first", e.target.value)
);
operatorInput2.addEventListener("change", (e) =>
  onOperatorChange("second", e.target.value)
);

// Draw Result in HTML

const printResult = (result) =>
  (document.querySelector("#result").innerHTML = result);

// Verify Operators

const verifyOperators = (operators) =>
  !(isNaN(operators.first) || isNaN(operators.second));

// Print Error

const printError = () => printResult("Error");

// Operation

const add = (operator1, operator2) => operator1 + operator2;
const subtracion = (operator1, operator2) => operator1 - operator2;
const multiplication = (operator1, operator2) => operator1 * operator2;
const division = (operator1, operator2) => operator1 / operator2;

function handleClick(operation) {
  verifyOperators(operators)
    ? printResult(operation(operators.first, operators.second))
    : printError();
}

addButton.addEventListener("click", () => handleClick(add));
subtracionButton.addEventListener("click", () => handleClick(subtracion));
multiplicationButton.addEventListener("click", () =>
  handleClick(multiplication)
);
divisionButton.addEventListener("click", () => handleClick(division));
