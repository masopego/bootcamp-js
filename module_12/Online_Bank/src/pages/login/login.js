import { isValidLogin } from "./login.api";
import { formValidation } from "./login.validation";
import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
} from "../../common/helpers";
import { history, routes } from "../../core/router";

let login = {
  user: "",
  password: "",
};

const onNavigate = (isValid) => {
  if (isValid) {
    history.push(routes.accountList);
  } else {
    alert("Usuario y/o contraseña no válidos");
  }
};

onUpdateField("user", (event) => {
  const value = event.target.value;
  login = { ...login, user: value };
  formValidation.validateField("user", login.user).then((result) => {
    onSetError("user", result);
  });
});

onUpdateField("password", (event) => {
  const value = event.target.value;
  login = { ...login, password: value };
  formValidation.validateField("password", login.password).then((result) => {
    onSetError("password", result);
  });
});

onSubmitForm("login-button", () => {
  formValidation.validateForm(login).then((result) => {
    onSetFormErrors(result);
    console.log(result);
    if (result.succeeded) {
      isValidLogin(login).then((isValid) => {
        onNavigate(isValid);
      });
    }
  });
});
