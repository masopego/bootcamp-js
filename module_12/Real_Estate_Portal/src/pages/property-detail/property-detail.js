import { history, routes } from "../../core/router";
import { getPropertyList } from "../property-list/property-list.api";
import { setPropertyValues } from "./property-detail.helpers";
import { mapPropertyDetailToApiFromVM } from "./property-detail.mappers";
import { getEquipmentsList, insertContact } from "./property-detail.api";
import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
} from "../../common/helpers";
import { formValidation } from "./property-detail.validation";

const params = history.getParams();

Promise.all([getPropertyList(params), getEquipmentsList()]).then(
  ([property, equipmentList]) => {
    loadProperty(property, equipmentList);
  }
);

const loadProperty = (property, equimentList) => {
  const viewModelPropertyDetail = mapPropertyDetailToApiFromVM(
    property[0],
    equimentList
  );
  setPropertyValues(viewModelPropertyDetail);
};

let formContact = {
  email: "",
  message: "",
};

Object.keys(formContact).forEach((field) => {
  onUpdateField(field, (event) => {
    const value = event.target.value;
    formContact = { ...formContact, [field]: value };

    formValidation
      .validateField(field, formContact[field])
      .then((result) => onSetError(field, result));
  });
});

onSubmitForm("contact-button", () => {
  formValidation.validateForm(formContact).then((result) => {
    onSetFormErrors(result);

    if (result.succeeded) {
      insertContact(formContact).then(() => {
        history.push(routes.propertyList);
      });
    }
  });
});
