const plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
const encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

const encryptedText = document.getElementById("encrypted");
const decryptedText = document.getElementById("decrypted");
const encryptButton = document.getElementById("encrypt_button");
const decryptButton = document.getElementById("decrypt_button");

const searchIndex = (alphabet, letter) => {
  for (let i = 0; i < alphabet.length; i++) {
    if (alphabet[i] === letter) {
      return i;
    }
  }
  return -1;
};

function convertMessage(input, origin, target) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    const letterIndex = searchIndex(origin, input[i]);

    if (letterIndex === -1) {
      output += input[i];
    } else {
      const conversionLetter = target[letterIndex];
      output += conversionLetter;
    }
  }
  return output;
}

// function convertMessage(input, origin, target) {
//   return input
//     .split("")
//     .map((letter) => {
//       const letterIndex = searchIndex(origin, letter);
//       return letterIndex === -1 ? letter : target[letterIndex];
//     })
//     .join("");
// }

const encrypt = (input) =>
  convertMessage(input, plainAlphabet, encryptedAlphabet);

const decrypt = (input) =>
  convertMessage(input, encryptedAlphabet, plainAlphabet);

encryptButton.addEventListener("click", () => {
  decryptedText.value = encrypt(encryptedText.value);
});

decryptButton.addEventListener("click", () => {
  encryptedText.value = decrypt(decryptedText.value);
});
