import Axios from "axios";
import qs from "qs";

const propertyListUrl = `${process.env.BASE_API_URL}/properties?`;
export const getPropertyList = (queryParams) =>
  Axios.get(`${propertyListUrl}${qs.stringify(queryParams)}`).then(
    ({ data }) => data
  );

const saleTypeListUrl = `${process.env.BASE_API_URL}/saleTypes`;
export const getSaleTypeList = () =>
  Axios.get(saleTypeListUrl).then(({ data }) => data);

const provinceListUrl = `${process.env.BASE_API_URL}/provinces`;
export const getProvinceList = () =>
  Axios.get(provinceListUrl).then(({ data }) => data);
