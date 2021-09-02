import { Validators, createFormValidation } from "@lemoncode/fonk";
const validationSchema = {
  field: {
    user: [
      {
        validator: Validators.required,
        message: "El email es obligatorio",
      },
      {
        validator: Validators.email,
        message: "Email no válido",
      },
    ],
    password: [
      {
        validator: Validators.required,
        message: "La contraseña es obligatoria",
      },
    ],
  },
};
export const formValidation = createFormValidation(validationSchema);
