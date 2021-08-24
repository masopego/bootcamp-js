const BASE_URL = "https://www.breakingbadapi.com/api";

export const getCharacters = () => {
  return fetch(`${BASE_URL}/characters`).then((response) => response.json());
};

export const getCharacterById = (id) => {
  return fetch(`${BASE_URL}/characters/${id}`).then((response) =>
    response.json()
  );
};
