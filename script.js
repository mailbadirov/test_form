let isEyeOn = true;
const passwordInput = document.querySelector('.password');

logo.addEventListener('click', (e) => {
  const inputType = isEyeOn ? 'text' : 'password';
  const iconState = isEyeOn ? 'on' : 'off';

  e.target.style.backgroundImage = `url(assets/eye-${iconState}.svg)`;
  passwordInput.setAttribute('type', inputType);
  passwordInput.focus();

  isEyeOn = !isEyeOn;
});
