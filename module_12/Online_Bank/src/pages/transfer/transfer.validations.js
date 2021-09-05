import { Validators, createFormValidation } from "@lemoncode/fonk";
import { iban } from "@lemoncode/fonk-iban-validator";
import { positiveNumber } from "@lemoncode/fonk-positive-number-validator";
import { rangeNumber } from "@lemoncode/fonk-range-number-validator";

const validationSchema = {
  field: {
    iban: [
      {
        validator: Validators.required,
        message: "Campo requerido",
      },
      {
        validator: iban.validator,
        message: "El campo debe tener un formato IBAN válido",
      },
    ],
    name: [
      {
        validator: Validators.required,
        message: "Campo requerido",
      },
    ],
    amount: [
      {
        validator: positiveNumber.validator,
        message: "Debe ser un valor numérico positivo",
      },
      {
        validator: Validators.required,
        message: "Campo requerido",
      },
    ],
    concept: [
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
    day: [
      {
        validator: Validators.required,
        message: "Campo requerido",
      },
      {
        validator: rangeNumber.validator,
        customArgs: {
          strictTypes: "",
          min: {
            value: 1,
            inclusive: true,
          },
          max: {
            value: 31,
            inclusive: true,
          },
        },
      },
    ],
    month: [
      {
        validator: Validators.required,
        message: "Campo requerido",
      },
      {
        validator: rangeNumber.validator,
        customArgs: {
          strictTypes: "",
          min: {
            value: 1,
            inclusive: true,
          },
          max: {
            value: 12,
            inclusive: true,
          },
        },
      },
    ],
    year: [
      {
        validator: Validators.required,
        message: "Campo requerido",
      },
      {
        validator: rangeNumber.validator,
        customArgs: {
          strictTypes: "",
          min: {
            value: 2021,
            inclusive: true,
          },
          max: {
            value: 2021,
            inclusive: true,
          },
        },
      },
    ],
    email: [
      {
        validator: Validators.email,
        message: "Campo requerido",
      },
    ],
  },
};
export const formValidation = createFormValidation(validationSchema);
