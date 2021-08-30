const books = [
  {
    typeRoom: "standard",
    breakfast: false,
    pax: 1,
    nights: 3,
  },
  {
    typeRoom: "standard",
    breakfast: false,
    pax: 1,
    nights: 4,
  },
  {
    typeRoom: "suite",
    breakfast: true,
    pax: 2,
    nights: 1,
  },
];

class RoomPriceCalculator {
  VAT = 0.21;
  TYPE_ROOM_PRICES = {
    standard: 100,
    suite: 150,
  };
  ADDITIONAL_CHARGE_BY_PERSON_AND_NIGHT = 40;
  NUMBER_OF_PEOPLE_TO_CONSIDER_ADDITIONAL = 1;
  ADDITIONAL_CHARGE_BY_BREAKFAST = 15;

  constructor(books) {
    this.books = books;
  }

  roomPrice(book) {
    return this.TYPE_ROOM_PRICES[book.typeRoom];
  }

  additionalCharge(book) {
    const extraPeopleAdditionalCharge =
      book.pax > this.NUMBER_OF_PEOPLE_TO_CONSIDER_ADDITIONAL
        ? this.ADDITIONAL_CHARGE_BY_PERSON_AND_NIGHT *
          (book.pax - this.NUMBER_OF_PEOPLE_TO_CONSIDER_ADDITIONAL)
        : 0;

    const breakfastCharge = book.breakfast
      ? this.ADDITIONAL_CHARGE_BY_BREAKFAST
      : 0;

    return extraPeopleAdditionalCharge + breakfastCharge;
  }

  calculateSubTotalPrice() {
    return this.books.reduce((subtotal, book) => {
      const price =
        (this.roomPrice(book) + this.additionalCharge(book)) * book.nights;

      return subtotal + price;
    }, 0);
  }
  calculateTotalPrice() {
    return (
      this.calculateSubTotalPrice() + this.calculateSubTotalPrice() * this.VAT
    );
  }
}

const calculator = new RoomPriceCalculator(books);

console.log(calculator.calculateTotalPrice());

class TourOperatorRoomPriceCalculator extends RoomPriceCalculator {
  TYPE_ROOM_DEFAULT_PRICE = 100;
  TOUR_OPERATOR_DISCOUNT = 0.15;

  constructor(books) {
    super(books);
  }

  roomPrice(book) {
    return this.TYPE_ROOM_DEFAULT_PRICE;
  }

  calculateSubTotalPrice() {
    const subtotal = super.calculateSubTotalPrice();

    return subtotal - subtotal * this.TOUR_OPERATOR_DISCOUNT;
  }
}

const tourOperatorCalculator = new TourOperatorRoomPriceCalculator(books);

console.log(tourOperatorCalculator.calculateTotalPrice());
