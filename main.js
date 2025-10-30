const btn = document.querySelector("#btn");
const counterText = document.querySelector("#counter");

let count = 0;

btn.addEventListener("click", () => {
  count++;
  counterText.innerText = `Count: ${count}`;
});