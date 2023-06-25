const formEl = document.querySelector(`.login-form`);

formEl.addEventListener(`submit`, (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert`Всі поля повинні бути заповнені!`;
    return;
  }

  const inputValues = {
    email: email.value,
    password: password.value,
  };

  console.log(inputValues);

  event.currentTarget.reset();
});
