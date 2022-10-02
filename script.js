let eyeOn = true;
const passInput = document.querySelector('.pass');

logo.addEventListener('click', (e) => {
  if (eyeOn) {
    passInput.setAttribute('type', 'text');
    e.target.style.backgroundImage = "url('assets/eye-on.svg')";
  } else {
    passInput.setAttribute('type', 'password');
    e.target.style.backgroundImage = "url('assets/eye-off.svg')";
  }
  passInput.focus();
  eyeOn = !eyeOn;
});
