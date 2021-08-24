import "./styles.css";
import { getCharacters, getCharacterById } from "./data-business.js";
import { createCharacterRow, showCharacter } from "./utils.js";

const appRoot = document.querySelector("#root");

const onHandleClick = (characterId) => {
  getCharacterById(characterId).then((data) => showCharacter(data[0]));
};

getCharacters().then((data) => {
  appRoot.textContent = "";

  data.forEach((character) => {
    const element = createCharacterRow(character);
    appRoot.appendChild(element);
    element.addEventListener("click", () => onHandleClick(character.char_id));
  });
});
