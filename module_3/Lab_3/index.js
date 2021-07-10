// Calculate Total Price of hotel booking
const hotel = { count: 7, price: 70.55, type: "hotel" };

function getTotal(product) {
  if (product.count <= 0) {
    return 0;
  }

  return product.count * product.price;
}

console.log(getTotal(hotel));

// Calculate IVA

const fruit = { count: 3, price: 0.55, type: "food" };
const dictionary = { count: 1, price: 18.0, type: "book" };

function getVat(product) {
  let vat = 0.21;

  switch (product.type) {
    case "food":
      vat = 0.1;
      break;
    case "book":
      vat = 0.04;
      break;
  }
  return (product.price * vat).toFixed(2);
}

console.log("IVA Hotel", getVat(hotel));
console.log("IVA Fruta", getVat(fruit));
console.log("IVA Diccionario", getVat(dictionary));

// Calculate Total IVA

function getTotalVat(product) {
  return product.count > 0 ? product.count * getVat(product) : 0;
}

console.log("IVA Total", getTotalVat(hotel));

// Show IVA in console
function printProductPrice(product) {
  const subtotal = getTotal(product);
  const vat = getTotalVat(product);
  const total = subtotal + vat;

  console.log("Subtotal:", subtotal + "€");
  console.log("IVA:", vat + "€");
  console.log("Total:", total + "€");
}

printProductPrice(hotel);

// Calculate net salary

const employee = {
  raw: 8000,
  children: 2,
  wage: 14,
};

const rangues = {
  first: 12000,
  second: 24000,
  third: 34000,
};

const reduction = 2;

function calculateNetSalary(employee) {
  let retention;

  // Less than 12.000€
  if (employee.raw < rangues.first) {
    retention = 0;
  } else if (employee.raw < rangues.second) {
    retention = 8;
  } else if (employee.raw < rangues.third) {
    retention = 16;
  } else {
    retention = 30;
  }

  if (employee.children > 0 && retention - reduction > 0) {
    retention = retention - reduction;
  }

  console.log(retention);

  return employee.raw - (employee.raw * retention) / 100;
}

console.log("Salario Neto", calculateNetSalary(employee));
