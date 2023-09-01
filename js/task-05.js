const inputField = document.querySelector('#name-input');
const outputElement = document.querySelector('#name-output');

inputField.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    outputElement.textContent = event.currentTarget.value;
    outputElement.textContent = inputField.value === "" ? 'Anonymous' : event.currentTarget.value;
}

