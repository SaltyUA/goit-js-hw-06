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
console.log(refs.input.min);

refs.createBtn.addEventListener(`click`, createBoxes);
refs.destroyBtn.addEventListener(`click`, destroyBoxes);
function createBoxes() {
  const value = refs.input.value;

  if (
    refs.input.value > Number(refs.input.max) ||
    refs.input.value < Number(refs.input.min)
  ) {
    alert(`Значення від 1 до 100`);
    refs.input.value = 100;
    return;
  }

  const boxes = [];

  for (let i = 0; i < value; i += Number(refs.input.step)) {
    const box = document.createElement(`div`);
    box.style.height = `${30 + i * 10}px`;
    box.style.width = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  refs.boxes.append(...boxes);
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
  refs.input.value = "";
}
