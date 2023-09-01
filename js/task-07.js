const fontSizeControl = document.querySelector('#font-size-control');
const spanElement = document.querySelector('#text');


fontSizeControl.addEventListener('input', onRangeChange);

function onRangeChange(event) {

    const fontSize = event.target.value + 'px';
    spanElement.style.fontSize = fontSize;

}