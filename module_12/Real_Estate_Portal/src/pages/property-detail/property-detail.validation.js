import { Validators, createFormValidation } from "@lemoncode/fonk";

const validationSchema = {
  field: {
    email: [
      {
        validator: Validators.required,
        message: "El email es obligatorio",
      },
      {
        validator: Validators.email,
        message: "Email no válido",
      },
    ],
    message: [
      {
        validator: Validators.required,
        message: "El mensaje es obligatorio",
      },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);
