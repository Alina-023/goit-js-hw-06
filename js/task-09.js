

const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');


changeColorButton.addEventListener('click', onClickButton);

function onClickButton() {
  document.body.style.backgroundColor = colorSpan.textContent = getRandomHexColor();
  
}

function getRandomHexColor() {
  return `#${(Math.random() * 0xffffff << 0).toString(16).padStart(6, '0')}`;
}


