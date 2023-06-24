const inputEl = document.querySelector(`#name-input`);
const outputEl = document.querySelector(`#name-output`);

let nameOutput = outputEl.textContent;
inputEl.addEventListener(`input`, () => {
  if (inputEl.value.trim().length === 0) {
    nameOutput = "Anonymous";
  } else {
    nameOutput = inputEl.value;
  }

  outputEl.textContent = nameOutput.trim();
});
