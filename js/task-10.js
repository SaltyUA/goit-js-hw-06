function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  controls: document.querySelector(`#controls`),
  input: document.querySelector(`#controls > input`),
  createBtn: document.querySelector(`#controls > button[data-create]`),
  destroyBtn: document.querySelector(`#controls > button[data-destroy]`),
  boxes: document.querySelector(`#boxes`),
};

refs.createBtn.addEventListener(`click`, createBoxes);
refs.destroyBtn.addEventListener(`click`, destroyBoxes);
function createBoxes() {
  const value = refs.input.value;

  if (refs.input.value > 100) {
    alert(`Не більше 100`);
    refs.input.value = 100;
    return;
  }

  const boxes = [];

  for (let i = 0; i < value; ++i) {
    const box = document.createElement(`div`);
    box.style.height = `${30 + i * 10}px`;
    box.style.width = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  refs.boxes.prepend(...boxes);
}

function destroyBoxes() {
  while (refs.boxes.childNodes.length !== 0) {
    refs.boxes.firstElementChild.remove();
  }
}
