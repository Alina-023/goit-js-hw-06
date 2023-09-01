const inputField = document.querySelector('#validation-input');

inputField.addEventListener('blur', onFocusChange);
function onFocusChange(event) {

    const totalLength = inputField.dataset.length;
    const InputContentLength = inputField.value.length;
    if (InputContentLength === Number(totalLength)) {
        inputField.classList.remove('invalid')
        inputField.classList.add('valid')
    } else {
        inputField.classList.remove('valid')
        inputField.classList.add('invalid')
    }
}