const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

const products = [
  {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
];

let subtotalProducts = 0;
let productsTaxes = 0;

const cartContainer = document.querySelector("#cart__container");
const subtotalContainer = document.querySelector("#subtotal");
const taxesContainer = document.querySelector("#taxes");
const totalPriceContainer = document.querySelector("#total_price");
const calculateCartPriceButton = document.querySelector(
  "#calculate_cart_price"
);

const totalProductPrice = (price, units) => price * units;
const totalProductTax = (totalPrice, tax) => (totalPrice * tax) / 100;
const totalCart = () => subtotalProducts + productsTaxes;

const printAdd = (container, content) =>
  (container.innerHTML = content.toFixed(2));

const calculateProductsPrice = () => {
  products.forEach((product) => {
    productPrice = totalProductPrice(product.price, product.units);
    productTax = totalProductTax(productPrice, product.tax);

    subtotalProducts = subtotalProducts + productPrice;
    productsTaxes = productsTaxes + productTax;
  });
};

function onHandleChange(description, value) {
  const product = products.find(
    (element) => element.description === description
  );
  product.units = parseInt(value);
  isSomeProductFilled() ? enableButton() : disableButton();
}

const renderProduct = (product) => {
  return `<li><span>${product.description} - </span>
  <span>${product.price}€/ud.</span>
  <input type="number" value=${product.units} min="0" max="${product.stock}" onchange="onHandleChange('${product.description}', this.value)"/>
  </li>`;
};

const printCart = () => {
  const cartList = document.createElement("ol");
  let cartProduct = "";

  for (const product of products) {
    cartProduct += renderProduct(product);
  }
  cartList.innerHTML = cartProduct;
  cartContainer.appendChild(cartList);
};

printCart();

const calculateCartPrice = () => {
  calculateProductsPrice();
  printAdd(subtotalContainer, subtotalProducts);
  printAdd(taxesContainer, productsTaxes);
  totalCart();
  printAdd(totalPriceContainer, totalCart());
};

function enableButton() {
  calculateCartPriceButton.removeAttribute("disabled");
}

function disableButton() {
  calculateCartPriceButton.setAttribute("disabled", "");
}

function isSomeProductFilled() {
  return products.some((product) => product.units > 0);
}

calculateCartPriceButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  calculateCartPrice();
});
