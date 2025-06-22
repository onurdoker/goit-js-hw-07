function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

const box = document.getElementById('boxes');

destroyBtn.addEventListener('click', (event) => {
  destroyBoxes();
});

createBtn.addEventListener('click', (event) => {
  destroyBoxes();
  createBoxes(input.value);
});

function createBoxes(amount) {
  let size = 30;

  if (amount >= 1 && amount <= 100) {

    for (let i = 0; i < amount; i++) {

      const box = document.createElement('div');
      box.style.height = `${size}px`;
      box.style.width = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.appendChild(box);
      size += 10;
    }
  }
}

function destroyBoxes() {
  return box.innerHTML = '';
}