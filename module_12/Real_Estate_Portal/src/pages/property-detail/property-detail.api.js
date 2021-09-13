import Axios from "axios";

const urlEquipments = `${process.env.BASE_API_URL}/equipments`;

export const getEquipmentsList = () =>
  Axios.get(urlEquipments).then((response) => {
    return response.data;
  });

const urlContact = `${process.env.BASE_API_URL}/contact`;

export const insertContact = (contact) =>
  Axios.post(urlContact, contact).then(({ data }) => data);
