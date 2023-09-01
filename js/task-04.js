const addButton = document.querySelector('[data-action="increment"]');
const extractButton = document.querySelector('[data-action="decrement"]');
const counterValueElement = document.querySelector('#value');
let counterValue = 0;

addButton.addEventListener("click", () => {
    counterValue += 1;
    counterValueElement.textContent = counterValue;
});

extractButton.addEventListener("click", () => {
    counterValue -= 1;
    counterValueElement.textContent = counterValue;
});