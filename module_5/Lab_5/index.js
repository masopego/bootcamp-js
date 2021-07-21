const cart = [
  {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true,
  },
  {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true,
  },
  {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false,
  },
  {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false,
  },
];

const MIN_AMOUNT_TO_APPLY_DISCOUNT = 50;
const DISCOUNT = 0.05;

let premiumCheck = false;

const cartContainer = document.querySelector("#cart__container");
const totalCart = document.querySelector("#total__cart");
const premiumInput = document.querySelector("#premium");
const shippingCost = document.querySelector("#shipping_cost");
printCart();

function printCart() {
  let products = cart;
  if (premiumCheck) {
    products = filterCartByPremium();
  }

  const htmlElements = products.map((product) => {
    return `<li>
          <span>Nombre: ${product.name}</span>
          <span>Precio: ${product.price}</span>
          <span>Cantidad: ${product.count}</span>
          <span>Premium: ${product.premium ? "Sí" : "No"}<span>
          <button onClick="handleOnDeleteProduct(${
            product.id
          })">Eliminar Producto</button>
          </li>`;
  });

  shippingCost.innerHTML = allProductsArePremium()
    ? "Gastos de envío cero"
    : "Con gastos de envío";

  cartContainer.innerHTML = `<ul>${htmlElements.join("")}</ul>`;
  totalCart.innerHTML = calculateCartPrice(products).toFixed(2);
}

function deleteProduct(id) {
  const productIndex = cart.findIndex((product) => product.id === id);

  if (productIndex != -1) {
    cart.splice(productIndex, 1);
  }
}

function handleOnDeleteProduct(id) {
  deleteProduct(id);
  printCart();
}

function calculateProductPrice(product) {
  return product.price * product.count;
}

// Another Alternative
//
// function calculateCartPrice() {
//   let cartPrice = 0;
//   cart.forEach((product) => {
//     const productPrice = calculateProductPrice(product);
//     cartPrice = cartPrice + productPrice;
//   });

//   return cartPrice;
// }

function sumProductLines(products) {
  return products.reduce(
    (acc, product) => acc + calculateProductPrice(product),
    0
  );
}

function calculateCartPrice(products) {
  const cartPrice = sumProductLines(products);

  return cartPrice > MIN_AMOUNT_TO_APPLY_DISCOUNT
    ? applyDiscount(cartPrice, DISCOUNT)
    : cartPrice;
}

function applyDiscount(price, discount) {
  return price - price * discount;
}

function filterCartByPremium() {
  return cart.filter((product) => product.premium);
}

function allProductsArePremium() {
  return cart.every((product) => product.premium);
}

premiumInput.addEventListener("change", (ev) => {
  premiumCheck = ev.target.checked;
  printCart();
});
