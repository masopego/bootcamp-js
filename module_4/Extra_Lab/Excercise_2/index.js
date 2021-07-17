const typeRoomInput = document.querySelector("#type_room");
const spaInput = document.querySelector("#spa");
const sizeRoomInput = document.querySelector("#size_room");
const numberOfOvernightsInput = document.querySelector("#number_of_overnights");
const daysOfParkingInput = document.querySelector("#days_of_parking");

const calculateButton = document.querySelector("#calculate");
const showedTotalPrice = document.querySelector("#total_price");

const NIGHT_PRICE = {
  standard: 100,
  junior: 120,
  suite: 150,
};
const SPA_PRICE = 20;
const PARKING_PRICE = 10;
const CHARGE = {
  single: 0.75,
  triple: 1.25,
  double: 1,
};

const order = {
  typeRoom: "standard",
  spa: null,
  sizeRoom: "single",
  numberOfOvernights: NaN,
  daysOfParking: NaN,
};

const numericFields = ["numberOfOvernights", "daysOfParking"];
const isNumericField = (field) => numericFields.includes(field);
const onInputChange = (input, value) => {
  order[input] = isNumericField(input) ? parseInt(value) : value;
  calculateFinalPrice();
};

typeRoomInput.addEventListener("change", (e) =>
  onInputChange("typeRoom", e.target.value)
);
spaInput.addEventListener("change", (e) =>
  onInputChange("spa", e.target.value)
);
sizeRoomInput.addEventListener("change", (e) =>
  onInputChange("sizeRoom", e.target.value)
);
numberOfOvernightsInput.addEventListener("change", (e) =>
  onInputChange("numberOfOvernights", e.target.value)
);
daysOfParkingInput.addEventListener("change", (e) =>
  onInputChange("daysOfParking", e.target.value)
);

const includesSpa = (price) => {
  if (order.spa != null) {
    return price + SPA_PRICE;
  }

  return price;
};
const includesParking = (price) => {
  if (!isNaN(order.daysOfParking)) {
    return price + order.daysOfParking * PARKING_PRICE;
  }

  return price;
};

const getRoomPrice = (price) => {
  return price * CHARGE[order.sizeRoom];
};

function getRate(order) {
  let basePrice = NIGHT_PRICE[order.typeRoom];

  basePrice = includesSpa(basePrice);
  basePrice = getRoomPrice(basePrice);
  basePrice = basePrice * order.numberOfOvernights;
  basePrice = includesParking(basePrice);

  return basePrice;
}

const calculateFinalPrice = () => {
  if (isNaN(order.numberOfOvernights)) {
    showedTotalPrice.innerHTML =
      "Sigue completando campos para calcular el precio";
  } else {
    const finalPrice = getRate(order);
    showedTotalPrice.innerHTML = finalPrice + "€";
  }
};

calculateButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  calculateFinalPrice();
});
