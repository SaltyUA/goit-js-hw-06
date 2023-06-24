const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ListEl = document.querySelector(`ul#ingredients`);
const itemList = [];
ingredients.forEach((ingredient) => {
  const ingredientItem = document.createElement(`li`);
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add(`item`);
  itemList.push(ingredientItem);
});

ListEl.append(...itemList);
