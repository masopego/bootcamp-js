import { Validators, createFormValidation } from "@lemoncode/fonk";
import { arrayRequired } from "@lemoncode/fonk-array-required-validator";
import { positiveNumber } from "@lemoncode/fonk-positive-number-validator";
import { isUrl } from "@lemoncode/fonk-is-url-validator";

const validationSchema = {
  field: {
    title: [
      {
        validator: Validators.required,
        message: "Campo requerido",
      },
    ],
    notes: [
      {
        validator: Validators.required,
        message: "Campo requerido",
      },
    ],
    email: [
      {
        validator: Validators.required,
        message: "Campo requerido",
      },
      {
        validator: Validators.email,
        message: "Email no válido",
      },
    ],
    phone: [
      {
        validator: Validators.required,
        message: "Campo requerido",
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^(6|7|9)\d{8}$/ },
        message: "Introduzca solamente números",
      },
    ],
    price: [
      {
        validator: Validators.required,
        message: "Campo requerido",
      },
      {
        validator: positiveNumber.validator,
        message: "Introduzca una cantidad válida",
      },
    ],
    saleTypes: [
      {
        validator: arrayRequired.validator,
        customArgs: { minLength: 1, maxLength: 4 },
        message: "Elija al menos una de las opciones",
      },
    ],
    saleTypeIds: [
      {
        validator: Validators.required,
        message: "Campo requerido",
      },
    ],
    address: [
      {
        validator: Validators.required,
        message: "Campo requerido",
      },
    ],
    city: [
      {
        validator: Validators.required,
        message: "Campo requerido",
      },
    ],
    province: [
      {
        validator: Validators.required,
        message: "Elija una opción",
      },
    ],
    squareMeter: [
      {
        validator: Validators.required,
        message: "Campo requerido",
      },
      {
        validator: positiveNumber.validator,
        message: "Introduzca un número válido",
      },
    ],
    rooms: [
      {
        validator: Validators.required,
        message: "Campo requerido",
      },
    ],
    bathrooms: [
      {
        validator: Validators.required,
        message: "Campo requerido",
      },
    ],
    locationUrl: [
      {
        validator: Validators.required,
        message: "Campo requerido",
      },
      {
        validator: isUrl.validator,
        message: "Introduzca una URL válida",
      },
    ],
    newFeature: [
      {
        validator: Validators.required,
        message: "Campo requerido",
      },
    ],
    mainFeatures: [
      {
        validator: arrayRequired.validator,
        customArgs: {
          minLength: 1,
          maxLength: 10,
        },
        message: "Introduzca al menos una característica",
      },
    ],
    newEquipment: [
      {
        validator: Validators.required,
        message: "Campo requerido",
      },
      {
        validator: positiveNumber.validator,
        message: "Introduce un valor correcto",
      },
    ],
    equipments: [
      {
        validator: Validators.required,
        message: "Campo requerido",
      },
      {
        validator: arrayRequired.validator,
        customArgs: {
          minLength: 0,
        },
        message: "Introduzca al menos una característica",
      },
    ],
    images: [
      {
        validator: Validators.required,
        message: "Campo requerido",
      },
      {
        validator: arrayRequired.validator,
        customArgs: {
          minLength: 1,
        },
        message: "Introduzca al menos una imagen",
      },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);
