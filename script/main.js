import chars from "./collection.js";

const input = document.querySelector("#input-text");
const output = document.querySelector(".output-text");
const button = document.querySelector(".button__accept");
const translate = document.querySelector(".translate_text");
const clearText = document.querySelector(".button__clear");

function showText() {
  let text = input.value;

  if (text.length === 0) {
    return (output.textContent = "....");
  }

  const res = text
    .toUpperCase()
    .split("")
    .reduce((acc, el) => {
      return acc.concat(el.charCodeAt());
    }, []);

  const unlock = res.map((el) => String.fromCharCode(chars[el]));

  const answer = unlock.join("");
  output.textContent = `${answer[0].toUpperCase()}${answer
    .slice(1)
    .toLowerCase()}`;
}

input.addEventListener("input", showText);

button.addEventListener("click", () => {
  navigator.clipboard.writeText(output.textContent);
});

clearText.addEventListener("click", () => {
  input.value = "";
  showText();
});
