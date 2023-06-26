const inputEl = document.querySelector(`#name-input`);
const outputEl = document.querySelector(`#name-output`);

inputEl.addEventListener(`input`, () => {
  let nameOutput = inputEl.value || "Anonymous";

  outputEl.textContent = nameOutput.trim();
});
