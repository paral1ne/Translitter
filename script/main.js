const input = document.querySelector("input");
const output = document.querySelector(".output-text");
const button = document.querySelector("button");

function showText() {
  console.log(output.textContent);
  let text = input.value;

  let res = text.split("").reduce((acc, el) => {
    console.log(el.charCodeAt());
    return acc.concat(el);
  }, []);
  output.textContent = res.join("");
}

button.addEventListener("click", showText);
