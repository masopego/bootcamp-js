const typeRoomInput = document.querySelector("#type_room");
const spaInput = document.querySelector("#spa");
const sizeRoomInput = document.querySelector("#size_room");
const numberOfOvernightsInput = document.querySelector("#number_of_overnights");
const daysOfParkingInput = document.querySelector("#days_of_parking");

const calculateButton = document.querySelector("#calculate");
const showedTotalPrice = document.querySelector("#total_price");

const nightPrice = {
  standard: 100,
  junior: 120,
  suite: 150,
};

const spaPrice = 20;
const parkingPrice = 10;

const charge = {
  single: 0.75,
  triple: 1.25,
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
const onInputChange = (input, value) =>
  (order[input] = isNumericField(input) ? parseInt(value) : value);

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
    return (price = price + spaPrice);
  }

  return price;
};
const includesParking = (price) => {
  if (!isNaN(order.daysOfParking)) {
    return price + order.daysOfParking * parkingPrice;
  }

  return price;
};

const getRoomPrice = (price) => {
  if (order.sizeRoom === "triple") {
    return price * charge.triple;
  } else if (order.sizeRoom === "single") {
    return price * charge.single;
  }

  return price;
};

function getRate(order) {
  if (isNaN(order.numberOfOvernights)) {
    return (alert("Por favor, introduce un número de noches");
  }

  let basePrice = nightPrice[order.typeRoom];
  debugger;
  basePrice = includesSpa(basePrice);
  basePrice = getRoomPrice(basePrice);
  basePrice = basePrice * order.numberOfOvernights;
  basePrice = includesParking(basePrice);

  return basePrice;
}

calculateButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  showedTotalPrice.innerHTML = getRate(order);
});
