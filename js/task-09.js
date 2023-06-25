const refs = {
  body: document.querySelector(`body`),
  button: document.querySelector(`.widget > button`),
  textColor: document.querySelector(`.color`),
};

refs.button.addEventListener(`click`, changeColor);

function changeColor() {
  const newColor = getRandomHexColor();
  refs.body.style.backgroundColor = newColor;
  refs.textColor.textContent = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
