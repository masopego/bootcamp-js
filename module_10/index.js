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

// swapFirstSecond Function

const swapFirstSecond = (arr) => {
  const [first, second, ...rest] = arr;
  return [second, first, ...rest];
};

console.log(
  `swapFirstSecond: ${swapFirstSecond(["first", "second", "third"])}`
);

// firstEqual Function

const firstEqual = (character, ...strings) =>
  strings.every((string) => string.startsWith(character));

console.log(`firstEqual: ${firstEqual("j", "joseph", "joan", "john")}`);

// longest Function

const longest = (...arrs) => {
  const sizes = arrs.map((arr) => arr.length);
  const copySizes = [...sizes].sort((a, b) => (a < b ? 1 : -1));
  const [first] = copySizes;
  const index = sizes.findIndex((size) => size === first);
  return arrs[index];
};

const longest2 = (...arrs) =>
  arrs.reduce((acc, arr) => (arr.length > acc.length ? arr : acc), []);

console.log(`longest: ${longest([1, 2], [1, 2, 3], [1])}`);
console.log(`longest2: ${longest2([1, 2], [1, 2, 3], [1])}`);

// searchInStringV1 Function

const searchInStringV1 = (string, char) =>
  Array.from(string).reduce(
    (acc, letter) => (letter === char ? acc + 1 : acc),
    0
  );

console.log(
  `searchInStringV1: ${searchInStringV1(
    "supercalifragilisticoespidalidoso",
    "a"
  )}`
);

// searchInStringV2 Function

const searchInStringV2 = (string, char) =>
  Array.from(string).filter((letter) => letter === char).length;

console.log(
  `searchInStringV2: ${searchInStringV2(
    "supercalifragilisticoespidalidoso",
    "a"
  )}`
);

// sortCharacters Function

const sortCharacters = (string) => Array.from(string).sort().join("");
console.log(
  `sortCharacters: ${sortCharacters("supercalifragilisticoespidalidoso", "a")}`
);

// shout Function

const shout = (...words) =>
  `¡${words.map((word) => word.toUpperCase()).join(" ")}!`;

console.log(`shout: ${shout("hola", "qué", "tal")}`);

// shopping

const shoppingCart = [
  { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
  {
    category: "Carne y Pescado",
    product: "Pechuga pollo",
    price: 3.75,
    units: 2,
  },
  { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
  { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
  { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
  { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
  {
    category: "Carne y Pescado",
    product: "Secreto ibérico",
    price: 5.75,
    units: 2,
  },
];

const withTax = shoppingCart.map((product) => ({
  ...product,
  tax: product.price * 0.21,
}));

console.log(`With tax`, withTax);

const sorted = shoppingCart.sort((productA, productB) =>
  productA.units < productB.units ? 1 : -1
);

console.log(`sorted`, sorted);

const subtotal = shoppingCart
  .filter((product) => product.category === "Droguería")
  .reduce((acc, product) => acc + product.price * product.units, 0);

console.log(`subtotal`, subtotal);

const sortedCategories = shoppingCart
  .sort((productA, productB) =>
    productA.category > productB.category ? 1 : -1
  )
  .map((product) => `${product.product} -> ${product.price * product.units} €`);

console.log(`sortedCategories`, sortedCategories);
