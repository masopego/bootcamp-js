// hasId Function
const obj = {
  id: 1,
  name: "Alonso",
  lastName: "Alonso",
};

const objWithoutId = { name: "Alonso", lastName: "Alonso" };

const hasId = (object) => "id" in object;

console.log(`Object with id: ${hasId(obj)}`);
console.log(`Object with id: ${hasId(objWithoutId)}`);

// head Function

const arr = ["Apple", "grape", "anana", "orange", "pear"];

const head = (arr) => {
  const [first] = arr;
  return first;
};

console.log(`First element: ${head(arr)}`);

// tail Function

const tail = (arr) => {
  const [_, ...restItems] = arr;
  return restItems;
};

console.log(`Array without first element: ${tail(arr)}`);

// swapFirstToLast Function

const swapFirstToLast = (arr) => {
  const [firstItem, ...restItems] = arr;
  const newArray = [...restItems, firstItem];
  return newArray;
};

console.log(
  `Array with first element in last position: ${swapFirstToLast(arr)}`
);

// excludeId Function

const excludeId = (obj) => {
  const { id, ...restItems } = obj;
  const newObj = { ...restItems };
  return newObj;
};

console.log(`Object exclude id:`, excludeId(obj));

// wordsStartingWithA Function

const wordsStartingWithA = (arr) =>
  arr.filter((character) => character.charAt(0).toLowerCase() === "a");

console.log(`Word start with A ${wordsStartingWithA(arr)}`);

// concat Function

const concat = (...strings) => strings.join("|");

console.log(`Concat strings: ${concat("dog", "cats", "horse", "cow")}`);

// multArray Function

const arrNumber = [1, 2, 3, 4, 5];

const multArray = (arr, x) => arr.map((a) => a * x);

console.log(`Mult array * 3: ${multArray(arrNumber, 3)}`);

// calcMult Function

const calcMult = (...numbers) =>
  numbers.reduce((acc, number) => acc * number, 1);

console.log(`Calc mult: ${calcMult(1, 2, 3, 4, 5)}`);
