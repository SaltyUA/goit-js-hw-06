const inputEl = document.querySelector(`#font-size-control`);
const textEl = document.querySelector(`#text`);

inputEl.value = Number(textEl.style.fontSize);

inputEl.addEventListener(`input`, () => {
  textEl.style.fontSize = `${inputEl.value}px`;
});
