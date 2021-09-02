import Axios from "axios";

const endpoint = `${process.env.BASE_API_URL}/login`;

export const isValidLogin = (login) => {
  Axios.post(endpoint, login).then(({ data }) => data);
};
