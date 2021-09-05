import { history, routes } from "../../core/router";
import { sendTransfer } from "./transfer.api";
import { setAccountOptions } from "./transfer.helpers";
import { getAccountList } from "../account-list/account-list.api";
import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
} from "../../common/helpers";
import { formValidation } from "./transfer.validations";

const params = history.getParams();

let transfer = {
  accountId: params.id,
  iban: "",
  name: "",
  amount: "",
  concept: "",
  notes: "",
  day: "",
  month: "",
  year: "",
  email: "",
};

Object.keys(transfer)
  .filter((field) => field != "accountId")
  .forEach((field) => {
    onUpdateField(field, (event) => {
      const value = event.target.value;
      transfer = { ...transfer, [field]: value };

      formValidation.validateField(field, transfer[field]).then((result) => {
        onSetError(field, result);
      });
    });
  });

onUpdateField("select-account", (event) => {
  const value = event.target.value;
  transfer = { ...transfer, accountId: value };
});

getAccountList().then((accountList) => {
  setAccountOptions(accountList, params.id);
  if (!params.id) {
    transfer.accountId = accountList[0].id;
  }
});

onSubmitForm("transfer-button", () => {
  console.log(transfer);
  formValidation.validateForm(transfer).then((result) => {
    onSetFormErrors(result);
    if (result.succeeded) {
      sendTransfer(transfer).then(() => {
        history.push(routes.accountList);
      });
    }
  });
});
