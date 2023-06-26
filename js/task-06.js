const inputEl = document.querySelector(`#validation-input`);

inputEl.addEventListener(`blur`, inputValidation);

function inputValidation() {
  if (inputEl.value.trim().length === Number(inputEl.dataset.length)) {
    inputEl.classList.remove(`invalid`);
    inputEl.classList.add(`valid`);
  } else {
    inputEl.classList.remove(`valid`);
    inputEl.classList.add(`invalid`);
  }
}
