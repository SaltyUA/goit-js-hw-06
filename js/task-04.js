const valueEl = document.querySelector(`#value`);
const decrementEl = document.querySelector(`button[data-action="decrement"]`);
const incrementEl = document.querySelector(`button[data-action="increment"]`);
console.log(valueEl.textContent);

let counterValue = valueEl.textContent;

decrementEl.addEventListener(`click`, () => {
  --counterValue;
  valueEl.textContent = counterValue;
});

incrementEl.addEventListener(`click`, () => {
  ++counterValue;
  valueEl.textContent = counterValue;
});
