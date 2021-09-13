import { history, routes } from "../../core/router";
import { formValidation } from "./upload-property.validation";
import {
  getProvinceList,
  getSaleTypeList,
} from "../property-list/property-list.api";
import { getEquipmentsList } from "../property-detail/property-detail.api";
import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
  onAddFile,
} from "../../common/helpers";
import { saveProperty } from "./upload-property.api";
import { mapUploadPropertyToVMFromApi } from "./upload-property.mappers";
import {
  formatDeleteFeatureButtonId,
  setCheckboxList,
  setOptionList,
  onAddFeature,
  onAddImage,
  onRemoveFeature,
} from "./upload-property.helpers";

Promise.all([getSaleTypeList(), getProvinceList(), getEquipmentsList()]).then(
  (resultList) => {
    const [saleTypeList, provinceList, equipmentList] = resultList;

    setCheckboxList(saleTypeList, "saleTypes");
    setOptionList(provinceList, "province");
    setCheckboxList(equipmentList, "equipments");
  }
);

let newProperty = {
  title: "",
  notes: "",
  email: "",
  phone: "",
  price: "",
  saleTypes: "",
  saleTypeIds: [],
  address: "",
  city: "",
  province: "",
  squareMeter: "",
  rooms: "",
  bathrooms: "",
  locationUrl: "",
  newFeature: "",
  mainFeatures: [],
  newEquipment: "",
  equipments: [],
  newImage: "",
  images: [],
};

Object.keys(newProperty)
  .filter((field) => {
    return ![
      "newEquipment",
      "newImage",
      "saleTypeIds",
      "mainFeatures",
      "equipments",
      "images",
    ].includes(field);
  })
  .forEach((field) => {
    console.log(field);
    onUpdateField(field, (event) => {
      const value = event.target.value;
      newProperty = { ...newProperty, [field]: value };

      formValidation
        .validateField(field, newProperty[field])
        .then((result) => onSetError(field, result));
    });
  });

onUpdateField("saleTypes", (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    newSaleType: value,
  };
  formValidation
    .validateField("saleTypes", newProperty.newSaleType)
    .then((result) => {
      onSetError("saleTypes", result);
      newProperty.saleTypeIds.push(newProperty.newSaleType);
    });
});

onUpdateField("equipments", (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    newEquipment: value,
  };
  formValidation
    .validateField("equipments", newProperty.newEquipment)
    .then((result) => {
      onSetError("equipments", result);
      newProperty.equipments.push(newProperty.newEquipment);
    });
});

onUpdateField("images", (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    newImage: value,
  };

  onAddFile("add-image", (value) => {
    onAddImage(value);
    newProperty.images.push(value);
  });

  formValidation
    .validateField("images", newProperty.images)
    .then((result) => onSetError("images", result));
});

onSubmitForm("insert-feature-button", () => {
  formValidation
    .validateField("newFeature", newProperty.newFeature)
    .then((result) => {
      onSetError("newFeature", result);
      if (result.succeeded) {
        onAddFeature(newProperty.newFeature);
        newProperty.mainFeatures.push(newProperty.newFeature);
        formValidation
          .validateField("mainFeatures", newProperty.mainFeatures)
          .then((result) => {
            onSetError("mainFeatures", result);

            newProperty.mainFeatures.map((myFeature) => {
              onSubmitForm(formatDeleteFeatureButtonId(myFeature), () => {
                onRemoveFeature(myFeature);
                let index = newProperty.mainFeatures.indexOf(myFeature);
                newProperty.mainFeatures.splice(index, 1);
              });
            });
          });
      }
    });
});

onSubmitForm("save-button", () => {
  formValidation.validateForm(newProperty).then((result) => {
    onSetFormErrors(result);
    console.log("RESULT", result);

    if (result.succeeded) {
      const mappedProperty = mapUploadPropertyToVMFromApi(newProperty);
      console.log(mappedProperty);
      saveProperty(mappedProperty).then(() => {
        history.push(routes.propertyList);
      });
    }
  });
});
