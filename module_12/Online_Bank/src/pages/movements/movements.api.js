import Axios from "axios";

const url = `${process.env.BASE_API_URL}/movements`;

export const getMovements = (accountId) =>
  Axios.get(`${url}?accountId=${accountId}`).then(({ data }) => data);
