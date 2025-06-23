const form = document.querySelector('.login-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const mail = form.querySelector('input[name="email"]').value.trim();
  const password = form.querySelector('input[name="password"]').value.trim();

  if (mail === '' || password === '') {
    return alert('All form fields must be filled in');
  }

  const submitValue = {
    mail: mail,
    password: password,
  };

  console.log(submitValue);

  form.reset();
});
