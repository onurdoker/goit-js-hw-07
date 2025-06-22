const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener('input', () => {
  let Inputname = input.value.trim();
  if (Inputname === null || Inputname === '') {
    Inputname = 'Anonymous';
  }
  output.textContent = Inputname;
});